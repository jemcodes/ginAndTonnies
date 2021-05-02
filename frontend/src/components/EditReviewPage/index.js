import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview, getReviews, deleteReview } from '../../store/review';
import { getDrinks } from '../../store/drink';
import './EditReview.css';

function EditReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { drinkId, reviewId } = useParams();

    useEffect(() => {
        dispatch(getDrinks());
        dispatch(getReviews(drinkId));
    }, [dispatch, drinkId])

    const sessionUser = useSelector(state => state.session.user);
    const drinkList = useSelector(state => state.drink.allDrinks);
    // const currentDrink = drinkList.find((drink) => {
    //     return drink.id === parseInt(drinkId)
    // });

    const reviewList = useSelector(state => state.review.allReviews)
    
    const [setCurrentReview] = useState();
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const updateRating = (e) => setRating(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    useEffect(() => {
        const foundReview = reviewList.find((review) => {
            return review.id === parseInt(reviewId)
        })
        if (foundReview) {
            setCurrentReview(foundReview)
            setRating(foundReview.rating)
            setContent(foundReview.content)
        }
    }, [reviewList, reviewId])

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: reviewId,
            rating,
            content,
            userId: sessionUser.id,
            drinkId: drinkId
        };

        const updatedReview = await dispatch(editReview(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
        ;

        if (updatedReview) {
            history.push(`/drinks/${drinkId}/reviews/`);
        }

        if (!updatedReview) {
            return null;
        }
    };

    const onDelete = async () => {
    const reviewWasDeleted = await dispatch(deleteReview(drinkId, reviewId))
        if (reviewWasDeleted) {
            history.push(`/drinks/${drinkId}/reviews/`);
         }
    }

    return (
        <section className="edit-review-form">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, index) => <li key={index}>
                        {error}
                    </li>)}
                </ul>
                <div id="edit-review-wrapper">
                    <div id="edit-review-container">
                        <h1>Something wrong with your review? Change it here!</h1>
                <div className="edit-review-contents">
                <input className="edit-review-rating"
                    type="number" min="1" max="5" step="1"
                    placeholder="Rating"
                    value={rating}
                    onChange={updateRating} />
                <textarea className="edit-review-content"
                    placeholder="Review Content"
                    value={content}
                    onChange={updateContent} />
                   <div className="update-submit-block">
                    <button className="edit-review-button" type="submit">Update Review</button>
                    <button className="review-delete-button" type="button" onClick={onDelete}>Delete This Review 👋</button>
                    </div>
                    </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default EditReviewPage;