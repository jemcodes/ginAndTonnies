import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function SingleDrinkPage() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDrinks());
    // }, [dispatch]);


    const drinkList = useSelector(state => {
        return state.drink.allDrinks
    });
    const { id } = useParams();
   
    const currentDrink = drinkList.find((drink) => {
        return drink.id === parseInt(id)
    }) 
    
    if (!currentDrink) {
        return null;
    }


    return (
        <div>Single drink
            <h2>{currentDrink.title}</h2>
            <h2>{currentDrink.content}</h2>
            <img alt={`A fresh cocktail`} src={currentDrink.drinkImg} />
            <h2>Created by: {currentDrink.User.username}</h2>
        </div>
    )

    
}

export default SingleDrinkPage;