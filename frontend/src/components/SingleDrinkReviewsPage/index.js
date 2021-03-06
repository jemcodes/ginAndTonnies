import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { getReviews} from '../../store/review';
import './SingleDrinkReviews.css';

function SingleDrinkReviewsPage({ currentDrink }) {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id]);

    const reviewList = useSelector(state => state.review.allReviews);
    const sessionUser = useSelector(state => state.session.user);

    const renderRating = (review) => {
        if (review.rating === 5) {
            review.ratingImages = 
            <div>
                <img src={`/images/lime3.png`} alt={`Little lime`}/>
                <img src={`/images/lime3.png`} alt={`Little lime`}/>
                <img src={`/images/lime3.png`} alt={`Little lime`}/>
                <img src={`/images/lime3.png`} alt={`Little lime`}/>
                <img src={`/images/lime3.png`} alt={`Little lime`}/>
            </div>
        } else if (review.rating === 4) {
            review.ratingImages = 
            <div>
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
            </div>
        } else if (review.rating === 3) {
            review.ratingImages =
            <div>
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
            </div>
        } else if (review.rating === 2) {
            review.ratingImages = 
            <div>
                <img src={`/images/lime3.png`} alt={`Little lime`} />
                <img src={`/images/lime3.png`} alt={`Little lime`} />
            </div>
        } else if (review.rating === 1) {
            review.ratingImages =
            <div>
                <img src={`/images/lime3.png`} alt={`Little lime`} />
            </div>
        }

        return (
            <h2 className="review-list-contents">{review.ratingImages}</h2>
        )
    }

    if (reviewList.length === 0) {
        return (
            <div>
                <div id="no-reviews-block">
                    <h1 id="no-reviews-found">No reviews found!</h1>
                    <NavLink to={`/drinks/${id}/reviews/new`}>
                        <button id="no-reviews-found-button" type="button">
                            Review This Drink
                        </button>
                    </NavLink>
                </div>
            </div>
        );
    }

    if (!sessionUser) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div id="review-wrapper">
            <h1 id="review-list-header">{`Reviews for ${currentDrink.title}`}</h1>
            {reviewList.map(review => (
                <div id="rating-rows" key={review.id}>
                    {renderRating(review)}
                    <h2 className="review-list-contents">{review.content}</h2>
                    <h2 className="review-list-contents">User: {review.User.username}</h2>
                    {review.User.username === sessionUser.username && 
                    (
                    <NavLink to={`/drinks/${id}/reviews/${review.id}/edit`}>
                        <button className="review-update-button" type="button">
                            UPDATE THIS REVIEW
                        </button>
                    </NavLink>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SingleDrinkReviewsPage;