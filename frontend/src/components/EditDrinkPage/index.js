import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { editDrink, getDrinks, deleteDrink } from '../../store/drink';

function EditDrinkPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    const drinkList = useSelector(state => state.drink.allDrinks);

    const [currentDrink, setCurrentDrink] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateDrinkImg = (e) => setDrinkImg(e.target.value);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
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

    const onDelete = async () => {
        console.log('RIGHT AFTER ONDELETE')
        const drinkWasDeleted = await dispatch(deleteDrink(currentDrink.id))
        console.log('RIGHT AFTER DRINK WAS DELETED')
        if (drinkWasDeleted) {
            history.push(`/drinks/`);
        }
        console.log('HEY IS THIS WHEN THE DRINK IS DELETED?', drinkWasDeleted)
    }
    
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
                <button type="button" onClick={onDelete}>Delete This Drink 👋</button>
            </form>
        </section>
    );
};

export default EditDrinkPage;