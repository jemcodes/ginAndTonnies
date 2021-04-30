import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDrink } from '../../store/drink';
import { useHistory, Redirect } from 'react-router-dom';
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
                    <div id="create-drink-guide">
                        <h1>Add New Drink</h1>
                        <h2>Didn't find what you were looking for? Use this form to add a new beer.</h2>
                    </div>
                <div id="create-drink-container">
                    <label id="create-drink-guidelines">
                    <input className="create-drink-title"
                        type="text"
                        placeholder="YOUR BEVERAGE TITLE"
                        value={title}
                        onChange={updateTitle} />
                        </label>
                    <label id="create-drink-guidelines">
                    <input className="create-drink-content"
                        type="text"
                        placeholder="DESCRIBE YOUR DRINK HERE"
                        value={content}
                        onChange={updateContent} />
                    </label>
                        <label id="create-drink-guidelines">vertical images work best 🍸
                    <input className="create-drink-img"
                        type="text"
                        placeholder="ADD AN IMAGE URL TO SHOW IT OFF"
                        value={drinkImg}
                        onChange={updateDrinkImg} />
                    </label>
                </div>
                <h2>Let's check out your new bevvie!</h2>
                <button type="submit">Create new drink</button>
                </div>
            </form>
        </section>
    );
};

export default CreateDrinkPage;