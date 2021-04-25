import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function DrinkList() {
    const dispatch = useDispatch();
    const drinkList = useSelector(state => {
        return state.drink.allDrinks
    });
    console.log(drinkList)

    useEffect(() => {
        console.log('useEffect triggered')
        dispatch(getDrinks());
    }, [dispatch]);

    if (drinkList.length === 0) {
        return (
            <h1>No drinks found!</h1>
        );
    }

    return (
        <div>Drink List
            {drinkList.map((drink) => {
                return (
                    <NavLink key={drink.id} exact to={`/drinks/${drink.id}`}>{drink.title}</NavLink>
                )
            })}
        </div>
    )
}

export default DrinkList;