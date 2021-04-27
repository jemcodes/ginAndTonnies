const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../../db/models');
const { route } = require('./drinks');

// GET a list of all the reviews
router.get('/', asyncHandler(async (req, res, next) => {
    const drinkId = parseInt(req.params.id, 10);
    const reviewsToShow = await db.Review.findAll( {
        where: {
            drinkId
        },
        include: db.User,
    });
    // console.log(reviewsToShow)
    return res.json( reviewsToShow )
}))

// GET a single review
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const singleReview = await db.Review.findByPk(reviewId, {
        include: [db.User]
    });
    return res.json(singleReview);
}))

// POST to create a new review
router.post('/', asyncHandler(async (req, res) => {
    const { rating, content, userId, drinkId } = req.body;

    const newReview = await db.Review.create( {
        rating,
        content,
        userId,
        drinkId
    });
    const newReviewWithUserAndDrink = await db.Review.findByPk(newReview.id, {
        include:
        [
            {model: db.User}, 
            {model: db.Drink}
        ]
    });
    console.log(newReviewWithUserAndDrink)
    return res.json( {newReview: newReviewWithUserAndDrink })
}))

// PUT to update a single review
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const reviewToUpdateId = parseInt(req.params.id, 10);
    const singleReviewToUpdate = await db.Review.findByPk(reviewToUpdateId);

    const { rating, content, userId, drinkId } = req.body;

    const updatedReview = await singleReviewToUpdate.update({
        rating,
        content,
        userId,
        drinkId
    });

    const updatedReviewWithUserAndDrink = await db.Review.findByPk(updatedReview.id, {
        include: 
        [
            {model: db.User},
            {model: db.Drink}
        ]
    });
    return res.json({ updatedReview: updatedReviewWithUserAndDrink})
}))

// DELETE to delete a single review

module.exports = router;