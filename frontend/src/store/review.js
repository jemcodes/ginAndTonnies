import { csrfFetch } from './csrf';


const SHOW_REVIEWS = 'reviews/SHOW_DRINKS';

const showReviews = (allReviews, drinkId) => {
    return {
        type: SHOW_REVIEWS,
        payload: allReviews, drinkId,
    };
};

export const getReviews = (drinkId) => async dispatch => {
    console.log('THIS IS THE GETREVIEWS DRINKID', drinkId)
    const response = await csrfFetch(`/drinks/${drinkId}/reviews`);
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
            newState.allReviews = action.payload.reviewList
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
}

export default reviewReducer;




