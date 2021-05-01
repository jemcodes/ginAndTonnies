import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editDrink, getDrinks, deleteDrink } from '../../store/drink';
import './EditDrink.css';

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
    const [errors, setErrors] = useState([]);

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

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            title,
            content,
            drinkImg,
            userId: sessionUser.id
        };

        const updatedDrink = await dispatch(editDrink(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
        ;


        if (updatedDrink) {
            history.push(`/drinks/${updatedDrink.id}`);
        }

        if (!updatedDrink) {
            return null;
        }
    };

    const onDelete = async () => {
        const drinkWasDeleted = await dispatch(deleteDrink(currentDrink.id))
        if (drinkWasDeleted) {
            history.push(`/drinks/`);
        }
    }
    
    return (
        <section className="edit-drink-form">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li key={index}>
                        {error}
                    </li>)}
                </ul>
                <div id="update-drink-wrapper">
                    <div id="update-drink-container">
                        <h1>See something wrong with the drink listing? Update it here!</h1>
                <div className="update-drink-contents">
                <label className="update-drink-labels">
                <input className="update-drink-title"
                    type="text"
                    // placeholder="Drink Title"
                    value={title}
                    onChange={updateTitle} />
                </label>
                <input className="update-drink-content"
                    type="text"
                    // placeholder="Drink Description"
                    value={content}
                    onChange={updateContent} />
                <input className="create-drink-img"
                    type="text"
                    // placeholder="Drink Picture"
                    value={drinkImg}
                    onChange={updateDrinkImg} />
                <div className="create-submit-block">
                    <button type="submit">Update Drink</button>
                    <button type="button" onClick={onDelete}>Delete This Drink 👋</button>
                </div>
                    </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default EditDrinkPage;