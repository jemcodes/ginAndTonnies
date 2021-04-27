import { csrfFetch } from './csrf';

const SHOW_REVIEWS = 'reviews/SHOW_REVIEWS';

const showReviews = (allReviews) => {
    return {
        type: SHOW_REVIEWS,
        payload: allReviews,
    };
};

export const getReviews = (drinkId) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${drinkId}/reviews`);

    if (response.ok) {
        const allReviews = await response.json();
        dispatch(showReviews(allReviews))
    }
};

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
        default:
            return state;
    }
}

export default reviewReducer;




