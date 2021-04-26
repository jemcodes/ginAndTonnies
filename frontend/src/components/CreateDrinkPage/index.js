import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDrink } from '../../store/drink';
import { useHistory } from 'react-router-dom';


function CreateDrinkPage() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateDrinkImg = (e) => setDrinkImg(e.target.value);

    // useEffect(() => {
    //     dispatch(createDrink(payload));
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            drinkImg,
            userId: sessionUser.id
        };

        const newDrink = await dispatch(createDrink(payload));
        if (newDrink) {
            history.push(`/drinks/${newDrink.id}`);
        }
    };

    return (
        <section className="create-drink-form">
            <form onSubmit={handleSubmit}>
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