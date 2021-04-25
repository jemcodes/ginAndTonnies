import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';
const CREATE_DRINK = 'drinks/CREATE_DRINK';

const showDrinks = (allDrinks) => {
    return {
        type: SHOW_DRINKS,
        payload: allDrinks,
    };
};

const createNewDrink = (newDrink) => {
    return {
        type: CREATE_DRINK,
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

export const createDrink = (newDrink) => async dispatch => {
    const { title, content, drinkImg, userId } = newDrink;
    const response = await csrfFetch('/api/drinks', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
            drinkImg,
            userId
        }),  
    });
    const data = await response.json();
    dispatch(createNewDrink(data));
    return response; 
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
        case CREATE_DRINK:
            newState.allDrinks.newDrink = action.payload
            return {
                ...state,
                newState
            }   
        default:
            return state;
    }
};
        
export default drinkReducer;