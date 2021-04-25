import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createPokemon, getPokemonTypes } from '../store/pokemon';
import { useHistory } from 'react-router-dom';


function CreateDrinkPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [drinkImg, setDrinkImg] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);
    const updateDrinkImg = (e) => setDrinkImg(e.target.value);

    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content,
            drinkImg,
        };

        const newDrink = await dispatch(createDrink(payload));
        if (newDrink) {
            history.push(`/drinks/${newDrink.id}`);
        }
    };

    return (
        <section className="new-form-holder centered middled">
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Number"
                    min="1"
                    required
                    value={no}
                    onChange={updateNo} />
                <input
                    type="number"
                    placeholder="Attack"
                    min="0"
                    max="100"
                    required
                    value={attack}
                    onChange={updateAttack} />
                <input
                    type="number"
                    placeholder="Defense"
                    min="0"
                    max="100"
                    required
                    value={defense}
                    onChange={updateDefense} />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={updateName} />
                <input
                    type="text"
                    placeholder="Move 1"
                    value={move1}
                    onChange={updateMove1} />
                <input
                    type="text"
                    placeholder="Move 2"
                    value={move2}
                    onChange={updateMove2} />
                <select onChange={updateType} value={type}>
                    {pokeTypes.map(type =>
                        <option key={type}>{type}</option>
                    )}
                </select>
                <button type="submit">Create new Pokemon</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </section>
    );
};

export default CreateDrinkPage;