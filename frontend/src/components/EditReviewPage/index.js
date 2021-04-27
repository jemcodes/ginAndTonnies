import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editReview, getReviews, deleteReview } from '../../store/review';
import { getDrinks } from '../../store/drink';

function EditReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { drinkId, reviewId } = useParams();
    console.log('THESE ARE FROM THE URL', drinkId, reviewId)

    useEffect(() => {
        dispatch(getDrinks());
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user);
    const drinkList = useSelector(state => state.drink.allDrinks);
    console.log('THIS IS THE DRNKLIST', drinkList)
    const currentDrink = drinkList.find((drink) => {
        return drink.id === parseInt(drinkId)
    });
    console.log('THIS IS THE CURRENT DRINK', drinkId)

    useEffect(() => {
        dispatch(getReviews(drinkId));
    }, [dispatch, drinkId]);

    const reviewList = useSelector(state => state.review.allReviews)
    console.log('THIS IS THE REVIEW LIST', reviewList)
    const foundReview = reviewList.find((review) => {
        return review.id === parseInt(reviewId)
    })
    console.log('THIS IS THE FOUND REVIEW', foundReview)

    const [currentReview, setCurrentReview] = useState();
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');

    const updateRating = (e) => setRating(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    // useEffect(() => {
    //     const foundReview = reviewList.find((review) => {
    //         return review.id === parseInt(reviewId)
    //     })
    //     console.log('THIS IS THE FOUND REVIEW', foundReview)
    //     if (foundReview) {
    //         setCurrentReview(foundReview)
    //         setRating(foundReview.rating)
    //         setContent(foundReview.content)
    //     }
    // }, [reviewList, reviewId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id: reviewId,
            rating,
            content,
            userId: sessionUser.id,
            drinkId: drinkId
        };

        const updatedReview = await dispatch(editReview(payload));
        console.log('THIS IS THE CURRENT DRINK ID FOR URL', drinkId)
        if (updatedReview) {
            history.push(`/drinks/${drinkId}/reviews/`);
        }

        if (!updatedReview) {
            return null;
        }
    };

    const onDelete = async () => {
    console.log('RIGHT AFTER ONDELETE')
    const reviewWasDeleted = await dispatch(deleteReview(reviewId))
    console.log('RIGHT AFTER REWVIEW WAS DELETED')
        if (reviewWasDeleted) {
            history.push(`/drinks/${drinkId}/reviews/`);
         }
        console.log('HEY IS THIS WHEN THE DRINK IS DELETED?', reviewWasDeleted)
    }

    return (
        <section className="edit-review-form">
            <form onSubmit={handleSubmit}>
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