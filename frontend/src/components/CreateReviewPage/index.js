import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { createReview } from '../../store/review';
import { getDrinks } from '../../store/drink';
import './CreateReview.css';


function CreateReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { drinkId } = useParams();

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);

    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const updateRating = (e) => setRating(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            rating,
            content,
            userId: sessionUser.id,
            drinkId: drinkId
        };

        const newReview = await dispatch(createReview(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
        ;

        if (newReview) {
            history.push(`/drinks/${drinkId}`);
        }
    };

    return (
        <section className="create-review-form">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li key={index}>
                        {error}
                    </li>)}
                </ul>
                <div id="create-review-wrapper">
                    <div id="create-review-container">
                        <h1>Have you tried this drink? Let us know your thoughts!</h1>
                <div className="create-review-body">
                <input className="create-review-rating"
                    type="number" min="1" max="5" step="1"
                    placeholder="Review Rating"
                    value={rating}
                    onChange={updateRating} />
                <textarea className="create-review-content"
                    placeholder="Review Content"
                    value={content}
                    onChange={updateContent} />
                    <button className="create-review-button" type="submit">Create new review</button>
                </div>
                    </div>
                </div>
            </form>
        </section>
    );
    
};

export default CreateReviewPage;