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
    console.log('This is new drink data', newDrinkData)
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
        console.log('DISPATCH NEW DRINK', newDrink)
        console.log('MORE NEW DRANK', newDrink.newDrink)
        console.log(typeof newDrink)
        return newDrink.newDrink;
    }
}

const initialState = {
    allDrinks: []
};

const drinkReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case SHOW_DRINKS:
            newState.allDrinks = action.payload.drinkList
            return {
                ...state,
                ...newState
            }   
        case ADD_DRINK:
            const newDrinkList = state.allDrinks
            newDrinkList.push(action.payload.newDrink)
            newState.allDrinks = newDrinkList

            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
};
        
export default drinkReducer;