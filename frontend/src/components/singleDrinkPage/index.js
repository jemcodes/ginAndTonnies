import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { getDrinks } from '../../store/drink';
import './singleDrink.css';

function SingleDrinkPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    const drinkList = useSelector(state => state.drink.allDrinks);
    const sessionUser = useSelector(state => state.session.user);
    
    const [currentDrink, setCurrentDrink] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');
   
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

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }
    
    if (!currentDrink) {
        return null;
    }

    return (
        <div id="single-drink-wrapper">
            {/* <NavLink to={`/drinks/`}>Return To Drinks</NavLink> */}
                <h1 id="single-drink-title">{title}</h1>
                <h2 id="single-drink-creator">Created by: {currentDrink.User.username}</h2>
            <div id="single-drink-container">
                <img alt={`A fresh cocktail`} src={drinkImg} />
                <p id="single-drink content">{content}</p>
                <NavLink to={`/drinks/${id}/edit`}>Update This Drink</NavLink>
                <NavLink to={`/drinks/${id}/reviews`}>See Reviews</NavLink>
            </div>
        </div>
    ) 
}

export default SingleDrinkPage;