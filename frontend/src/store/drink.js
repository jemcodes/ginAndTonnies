import { csrfFetch } from './csrf';

const SHOW_DRINKS = 'drinks/SHOW_DRINKS';
// const SHOW_DRINK = 'drinks/SHOW_DRINK';

const showDrinks = (allDrinks) => {
    return {
        type: SHOW_DRINKS,
        payload: allDrinks,
    };
};

// const showDrink = (singleDrink) => {
//     return {
//         type: SHOW_DRINK,
//         payload: singleDrink,
//     };
// };

export const getDrinks = () => async dispatch => {
    const response = await csrfFetch('/api/drinks');
    if (response.ok) {
        const allDrinks = await response.json();
        dispatch(showDrinks(allDrinks));
    }
};

// export const getSingleDrink = (id) => async dispatch => {
//     const response = await csrfFetch(`/api/drinks/${id}`);
//     if (response.ok) {
//         const singleDrink = await response.json();
//         dispatch(showDrink(singleDrink));
//     }
// }

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
        // case SHOW_DRINK:
        //     return {
        //         ...state,
        //     }   
        default:
            return state;
    }
};
        
export default drinkReducer;

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