import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { editReview, getReviews, deleteReview } from '../../store/review';
import { getDrinks } from '../../store/drink';

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
    const currentDrink = drinkList.find((drink) => {
        return drink.id === parseInt(drinkId)
    });

    // useEffect(() => {
    //     dispatch(getReviews(drinkId));
    // }, [dispatch, drinkId]);

    const reviewList = useSelector(state => state.review.allReviews)
    // const foundReview = reviewList.find((review) => {
    //     return review.id === parseInt(reviewId)
    // })
    

    const [currentReview, setCurrentReview] = useState();
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
                <input
                    type="text"
                    placeholder="Rating"
                    value={rating}
                    onChange={updateRating} />
                <input
                    type="text"
                    placeholder="Review Content"
                    value={content}
                    onChange={updateContent} />
                <button type="submit">Update Review</button>
                <button type="button" onClick={onDelete}>Delete This Review 👋</button>
            </form>
        </section>
    );
};

export default EditReviewPage;