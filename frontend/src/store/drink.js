import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';
const ADD_DRINK = 'drinks/ADD_DRINK';

const showDrinks = (allDrinks) => {
    return {
        type: SHOW_DRINKS,
        payload: allDrinks,
    };
};

const addDrink = (singleDrink) => {
    return {
        type: ADD_DRINK,
        payload: singleDrink,
    };
};

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch('/api/drinks');
    if (response.ok) {
        const allDrinks = await response.json();
        dispatch(showDrinks(allDrinks));
    }
};

export const addSingleDrink = (id) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${id}`);
    if (response.ok) {
        const singleDrink = await response.json();
        dispatch(addDrink(singleDrink));
    }
}

const initialState = {
    allDrinks: []
};

const drinkReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case SHOW_DRINKS:
            newState.allDrinks = action.payload
            return {
                ...state,
                ...newState
            }
        // case ADD_DRINK: 
        //     if (!state[action.singleDrink.id]) {
        //         newState = {
        //             ...state,
        //             [action.singleDrink.id]: action.singleDrink
        //         };
        //         const addToDrinkList = newState.allDrinks.map(id => newState[id]);
        //         addToDrinkList.push(action.singleDrink);
        //         return newState;
        //     }
        //     return {
        //         ...state,
        //         [action.singleDrink.id]: {
        //             ...state[action.singleDrink.id],
        //             ...action.singleDrink
        //         }
        //     };

        default:
            return state;
    }
};

export default drinkReducer;