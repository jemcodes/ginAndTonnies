import { csrfFetch } from './csrf';

const SHOW_REVIEWS = 'reviews/SHOW_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const showReviews = (allReviews) => {
    return {
        type: SHOW_REVIEWS,
        payload: allReviews,
    };
};

const addNewReview = (newReview) => {
    return {
        type: ADD_REVIEW,
        payload: newReview
    }
}

const updateReview = (updatedReview) => {
    return {
        type: UPDATE_REVIEW,
        payload: updatedReview
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        payload: reviewId
    }
}

export const getReviews = (drinkId) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${drinkId}/reviews`);

    if (response.ok) {
        const allReviews = await response.json();
        dispatch(showReviews(allReviews))
    }
};

export const createReview = (newReviewData) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${newReviewData.drinkId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReviewData),
    });
    if (response.ok) {
        const newReview = await response.json();
        dispatch(addNewReview(newReview));
        return newReview.newReview;
    }
}

export const editReview = (newReviewData) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${newReviewData.drinkId}/reviews${newReviewData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReviewData),
    });

    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(updateReview(updatedReview));
        return updatedReview.updatedReview;
    }
};

export const deleteReview = (drinkId, reviewId) => async dispatch => {
    console.log('IS THIS REVIEW GONNA DELETE?', reviewId)
    const response = await csrfFetch(`/api/drinks/${drinkId}/reviews/`, {
        method: 'DELETE'
    });
    if (response.ok) {
        dispatch(removeReview(reviewId));
        return reviewId;
    }
}

const initialState = {
    allReviews: []
};

const reviewReducer = (state = initialState, action) => {
    let newState = {};
    switch(action.type) {
        case SHOW_REVIEWS:
            newState.allReviews = action.payload
            return {
                ...state,
                ...newState
            }
        case ADD_REVIEW:
            const newReviewList = state.allReviews
            newReviewList.push(action.payload.newReview)
            newState.allReviews = newReviewList
            return {
                ...state,
                ...newState
            }
        case UPDATE_REVIEW:
            const updatedReviewList = state.allReviews
            const oldReviewIndex = updatedReviewList.findIndex(review => review.id === action.payload.updatedReview.id)
            updatedReviewList[oldReviewIndex] = action.payload.updatedReview
            newState.allReviews = updatedReviewList
            return {
                ...state,
                ...newState
            }
        case REMOVE_REVIEW: {
            const reviewListWithDelete = state.allReviews
            const reviewDrinkIndex = reviewListWithDelete.findIndex(review => review.id === action.payload)
            delete reviewListWithDelete[reviewDrinkIndex];
            newState.allReviews = reviewListWithDelete;
            return {
                ...state,
                ...newState
            }
        }
        default:
            return state;
    }
}

export default reviewReducer;




