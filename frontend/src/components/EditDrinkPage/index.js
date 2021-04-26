import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editDrink, getDrinks, deleteDrink } from '../../store/drink';

function EditDrinkPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    // useEffect(() => {
    //     dispatch(getDrinks());
    // }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    console.log('This is my USER', sessionUser)
    const drinkList = useSelector(state => state.drink.allDrinks);
    console.log(drinkList)

    const currentDrink = drinkList.find((drink) => {
        console.log('DRAAAAAANK', drink)
        return drink.id === parseInt(id)
    })

    console.log('This is my DRINK TITLE', currentDrink.title)

    const [title, setTitle] = useState(currentDrink.title);
    const [content, setContent] = useState(currentDrink.content);
    const [drinkImg, setDrinkImg] = useState(currentDrink.drinkImg);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateDrinkImg = (e) => setDrinkImg(e.target.value);

    // useEffect(() => {
    //     dispatch(getDrinks());
    // }, [dispatch, title, content, drinkImg]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...drinkList,
            title,
            content,
            drinkImg,
            userId: sessionUser.id
        };

        const updatedDrink = await dispatch(editDrink(payload));
        if (updatedDrink) {
            history.push(`/drinks/${updatedDrink.id}`);
        }

        if (!updatedDrink) {
            return null;
        }


    };

    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     hideForm();
    // };

    const deleteDrink = (e) => {
        e.preventDefault();
        dispatch(deleteDrink(currentDrink.id));
    };

    return (
        <section className="edit-drink-form">
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
                <button type="submit">Update Drink</button>
                <button onClick={deleteDrink}>Delete This Drink 👋</button>
            </form>
        </section>
    );
};

export default EditDrinkPage;