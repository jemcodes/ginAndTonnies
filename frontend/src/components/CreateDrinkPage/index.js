import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDrink } from '../../store/drink';
import { useHistory, Redirect, NavLink } from 'react-router-dom';
import './CreateDrink.css';


function CreateDrinkPage() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateDrinkImg = (e) => setDrinkImg(e.target.value);

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    // useEffect(() => {
    //     dispatch(createDrink(payload));
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (password === confirmPassword) {
        //     setErrors([]);
        //     return dispatch(sessionActions.signup({ email, username, password }))
        //         .catch(async (res) => {
        //             const data = await res.json();
        //             if (data && data.errors) setErrors(data.errors);
        //         });
        // }
        // return setErrors(['Confirm Password field must be the same as the Password field']);

        const payload = {
            title,
            content,
            drinkImg,
            userId: sessionUser.id
        };

        const newDrink = await dispatch(createDrink(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
        ;

        if (newDrink) {
            history.push(`/drinks/${newDrink.id}`);
        }
    };

    return (
        <section className="create-drink-form">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li key={index}>
                        {error}
                    </li>)}
                </ul>
                <div id="create-drink-wrapper">
                    <div id="create-drink-container">
                        <h1>Didn't find what you were looking for? Use this form to add a new drink.</h1>
                        <div className="create-drink-contents">
                            <label>
                            <input className="create-drink-title"
                                type="text"
                                placeholder="YOUR BEVERAGE TITLE"
                                value={title}
                                onChange={updateTitle} />
                            </label>
                        <label>
                        <textarea className="create-drink-content"
                            placeholder="DESCRIBE YOUR DRINK HERE"
                            value={content}
                            onChange={updateContent} />
                        </label>
                        <label>
                        {/* <p className="create-drink-guide"></p> */}
                        <input className="create-drink-img"
                            type="text"
                                    placeholder="ADD AN IMAGE URL - VERTICAL IMAGES WORK BEST 🍸"
                            value={drinkImg}
                            onChange={updateDrinkImg} />
                        </label>
                        <div className="create-submit-block">
                            <h2>Let's check out your new bevvie!</h2>
                            <button className="drink-create-button" type="submit">Create new drink</button>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </section>
    );
};

export default CreateDrinkPage;