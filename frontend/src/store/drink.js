import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';
const ADD_DRINK = 'drinks/ADD_DRINK';

const showDrinks = (allDrinks) => {
    return {
        type: SHOW_DRINKS,
        payload: allDrinks,
    };
};

const addNewDrink = (newDrink) => {
    return {
        type: ADD_DRINK,
        payload: newDrink,
    };
};

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch('/api/drinks');
    if (response.ok) {
        const allDrinks = await response.json();
        dispatch(showDrinks(allDrinks));
    }
};

export const createDrink = (newDrinkData) => async dispatch => {
    console.log(newDrinkData)
    const response = await csrfFetch('/api/drinks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDrinkData),  
    });
    if (response.ok) {
        const newDrink = await response.json();
        dispatch(addNewDrink(newDrink));
        return newDrink;
    }
}

const initialState = {
    allDrinks: []
};

const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DRINKS:
            const newState = {};
            newState.allDrinks = action.payload.drinkList
            return {
                ...state,
                ...newState
            }   
        case ADD_DRINK: 
            if (!state[action.newDrink.id]) {
                const newDrinkState = {
                    ...state,
                    [action.newDrink.id]: action.newDrink
                };
                const newDrinkList = newDrinkState.allDrinks.map(id => newDrinkState[id]);
                newDrinkList.push(action.newDrink);
                return newDrinkState;
            }  
            return {
                ...state,
                [action.newDrink.id]: {
                    ...state[action.newDrink.id],
                    ...action.newDrink,
                }
            }
        default:
            return state;
    }
};
        
export default drinkReducer;