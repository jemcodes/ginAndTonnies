import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';
const ADD_DRINK = 'drinks/ADD_DRINK';
const REMOVE_DRINK = 'drinks/REMOVE_DRINK';

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

const removeDrink = (drinkId) => ({
    type: REMOVE_DRINK,
    payload: drinkId,
});

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch('/api/drinks');
    if (response.ok) {
        const allDrinks = await response.json();
        dispatch(showDrinks(allDrinks));
    }
};

export const createDrink = (newDrinkData) => async dispatch => {
    // console.log('This is new drink data', newDrinkData)
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
        // console.log('DISPATCH NEW DRINK', newDrink)
        // console.log('MORE NEW DRANK', newDrink.newDrink)
        // console.log(typeof newDrink)
        return newDrink.newDrink;
    }
}

export const editDrink = (oldDrinkData) => async dispatch => {
    const response = await csrfFetch(`/api/drinks/${oldDrinkData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(oldDrinkData),
    });

    if (response.ok) {
        const updatedDrink = await response.json();
        dispatch(addNewDrink(updatedDrink));
        return updatedDrink.updatedDrink;
    }
};

export const deleteDrink = (drinkId) => async dispatch => {
    const response = await fetch(`/api/drinks/${drinkId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const drinkToDelete = await response.json();
        dispatch(removeDrink(drinkToDelete.drinkId));
    }
};

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
        case REMOVE_DRINK: {
            const drinkListWithDelete = state.allDrinks
            delete drinkListWithDelete[action.drinkId];
            newState.allDrinks = drinkListWithDelete
            return {
                ...state,
                ...newState
            }
        }
        default:
            return state;
    }
};
        
export default drinkReducer;