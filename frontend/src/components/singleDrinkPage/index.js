import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function SingleDrinkPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('useEffect triggered')
        dispatch(getDrinks());
    }, [dispatch]);

    const { drinkId } = useParams;
    console.log('THIS IS THE DRINKID', drinkId);
    const drinkList = useSelector(state => {
        return state.drink.allDrinks
    });
    const currentDrink = drinkList.find(drink => drinkId === drink.id)
    console.log(currentDrink)

    return (
        <div>
            <h2>{currentDrink.title}</h2>
            <h2>{currentDrink.content}</h2>
            <img alt={`A fresh cocktail`} src={currentDrink.drinkImg} />
            <h2>Created by:{currentDrink.userId}</h2>
        </div>
    )

    
}

export default SingleDrinkPage;