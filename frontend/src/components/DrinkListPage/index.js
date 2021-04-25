import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function DrinkList() {
    const dispatch = useDispatch();
    const drinkList = useSelector(state => {
        return state.drink.allDrinks
    });

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    if (drinkList.length === 0) {
        return (
            <h1>No drinks found!</h1>
        );
    }

    return (
        <div>Drink List
            <ul>
                {drinkList.map((drink) => (
                <li key={drink.id}>    
                    <NavLink  
                        to={`/drinks/${drink.id}`}>{drink.title}
                    </NavLink>
                </li>)
                )}
            </ul>
        </div>
    )
}

export default DrinkList;