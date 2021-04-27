import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getDrinks } from '../../store/drink';

function SingleDrinkPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    // console.log('This is my USER', sessionUser)
    const drinkList = useSelector(state => state.drink.allDrinks);
    // console.log(drinkList)
    // const reviewList = useSelector(state => {
    //     return state.review.allReviews
    // });
    
    const [currentDrink, setCurrentDrink] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');

    // const updateTitle = (e) => setTitle(e.target.value);
    // const updateContent = (e) => setContent(e.target.value);
    // const updateDrinkImg = (e) => setDrinkImg(e.target.value);
   
    useEffect(() => {
        const foundDrink = drinkList.find((drink) => {
            return drink.id === parseInt(id)
        })
        if (foundDrink) {
            setCurrentDrink(foundDrink)
            setTitle(foundDrink.title)
            setContent(foundDrink.content)
            setDrinkImg(foundDrink.drinkImg)
        }
    }, [drinkList, id])
    
    if (!currentDrink) {
        return null;
    }

    return (
        <div>Single drink
            <h2>{title}</h2>
            <h2>{content}</h2>
            <img alt={`A fresh cocktail`} src={drinkImg} />
            <h2>Created by: {currentDrink.User.username}</h2>
            <NavLink to={`/drinks/${id}/edit`}>Update This Drink</NavLink>
            <NavLink to={`/drinks/${id}/reviews`}>See Reviews</NavLink>
        </div>
    ) 
}

export default SingleDrinkPage;