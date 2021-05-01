import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Redirect } from 'react-router-dom';
import { getReviews} from '../../store/review';
import './SingleDrinkReviews.css';


function SingleDrinkReviewsPage() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getReviews(id));
    }, [dispatch, id]);

    const reviewList = useSelector(state => state.review.allReviews);
    const sessionUser = useSelector(state => state.session.user);
    // const drinkList = useSelector(state => state.drink.allDrinks);
    // console.log(drinkList)

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
        <div id="review-wrapper">
            {reviewList.map(review => (
                <div id="rating-rows" key={review.id}>
                    <h1 id="review-list-header">Reviews for Insert Drink Title Here</h1>
                    <h2 className="review-list-contents">Rating: {review.rating}</h2>
                    <h2 className="review-list-contents">{review.content}</h2>
                    <h2 className="review-list-contents">User: {review.User.username}</h2>
                    {/* <NavLink to={`/drinks/${id}/reviews/${review.id}/edit`}>Update This Review</NavLink> */}
                </div>
            ))}
            {/* <div>
                <NavLink to={`/drinks/${id}/reviews/new`}>Review This Drink</NavLink>
            </div>
            <div>
                <NavLink to={`/drinks/`}>Return To Drink List</NavLink>
            </div> */}
        </div>
    )
}

export default SingleDrinkReviewsPage;