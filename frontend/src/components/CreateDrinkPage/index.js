import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDrink } from '../../store/drink';
import { useHistory, Redirect } from 'react-router-dom';


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
                <input
                    type="text"
                    placeholder="Drink Title"
                    value={title}
                    onChange={updateTitle} />
                <input
                    type="text"
                    placeholder="Drink Description"
                    value={content}
                    onChange={updateContent} />
                <input
                    type="text"
                    placeholder="Drink Picture"
                    value={drinkImg}
                    onChange={updateDrinkImg} />
                <button type="submit">Create new drink</button>
            </form>
        </section>
    );
};

export default CreateDrinkPage;