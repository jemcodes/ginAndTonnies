import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getReviews } from '../../store/review';


function SingleDrinkReviewsPage() {
    const dispatch = useDispatch();
    const reviewList = useSelector(state => {
        return state.review.allReviews
    });
    // const { id } = useParams();
    console.log('THIS IS THE REVIEW LIST', reviewList)
    
    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    // const sessionUser = useSelector(state => state.session.user);
    // const drinkList = useSelector(state => state.drink.allDrinks);
  
    // const [currentReview, setCurrentReview] = useState();
    // const [rating, setRating] = useState();
    // const [content, setContent] = useState();

    // useEffect(() => {
    //     const foundReview = reviewList.find((review) => {
    //         return review.id === parseInt(id)
    //     })
    //     if (foundReview) {
    //         setCurrentReview(foundReview)
    //         setRating(foundReview.rating)
    //         setContent(foundReview.content)
    //     }
    // }, [reviewList])

    if (reviewList.length === 0) {
        return (
            <h1>No reviews found!</h1>
        )
    }

    return(
        <div>Hello Reviews!
            <ul>
                {reviewList.map((review) => (
                    <li key={review.id}>
                        <NavLink
                            to={`/drinks/${review.id}`}>{review.content}
                        </NavLink>
                    </li>)
                )}
            </ul>
        </div>
        

    )
}

export default SingleDrinkReviewsPage;