import { csrfFetch } from './csrf';

const SHOW_REVIEWS = 'reviews/SHOW_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';

const showReviews = (allReviews) => {
    return {
        type: SHOW_REVIEWS,
        payload: allReviews,
    };
};

const addNewReview = (newReview) => {
    return {
        type: ADD_REVIEW,
        payload: newReview,
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
        default:
            return state;
    }
}

export default reviewReducer;




