import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';


const showDrinks = (allDrinks) => {
    return {
        type: SHOW_DRINKS,
        payload: allDrinks,
    };
};

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch('/api/drinks');
    if (response.ok) {
        const allDrinks = await response.json();
        dispatch(showDrinks(allDrinks));
    }
};

const initialState = {
    allDrinks: []
};

const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DRINKS:
            const newState = {};
            newState.allDrinks = action.payload
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
};

export default drinkReducer;