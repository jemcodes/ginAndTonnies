import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { getReviews} from '../../store/review';


function SingleDrinkReviewsPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id]);

    const reviewList = useSelector(state => state.review.allReviews);
    const sessionUser = useSelector(state => state.session.user);

    if (reviewList.length === 0) {
        return (
            <div>
                <h1>No reviews found!</h1>
                <div>
                    <NavLink to={`/drinks/${id}/reviews/new`}>Review This Drink</NavLink>
                </div>
                <div>
                    <NavLink to={`/drinks/`}>Return To Drink List</NavLink>
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
        <div>Review List
            {reviewList.map(review => (
                <div key={review.id}>
                    <h2>Rating: {review.rating}</h2>
                    <h2>Review: {review.content}</h2>
                    <h2>User: {review.User.username}</h2>
                    <NavLink to={`/drinks/${id}/reviews/${review.id}/edit`}>Update This Review</NavLink>
                </div>
            ))}
            <div>
                <NavLink to={`/drinks/${id}/reviews/new`}>Review This Drink</NavLink>
            </div>
            <div>
                <NavLink to={`/drinks/`}>Return To Drink List</NavLink>
            </div>
        </div>
    )
}

export default SingleDrinkReviewsPage;