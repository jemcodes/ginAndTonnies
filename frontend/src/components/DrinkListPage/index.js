import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function DrinkList() {
    const dispatch = useDispatch();
    const { drinkList } = useSelector(state => {
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

    console.log(drinkList);

    return (
        <div>Drink List
            {drinkList.map((drink) => {
                return (
                    <NavLink key={drink.id} to={`/drinks/${drink.id}`}>{drink.title}</NavLink>
                )
            })}
        </div>
    )
}

export default DrinkList;