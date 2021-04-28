const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../../db/models');
const { route } = require('./drinks');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { validationResult, check } = require('express-validator');

// GET a list of all the reviews
router.get('/', requireAuth, asyncHandler(async (req, res, next) => {
    const drinkId = parseInt(req.params.id, 10);
    const reviewsToShow = await db.Review.findAll( {
        where: {
            drinkId
        },
        include: db.User,
    });
    return res.json( reviewsToShow )
}))

// GET a single review
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const singleReview = await db.Review.findByPk(reviewId, {
        include: [db.User]
    });
    return res.json(singleReview);
}));

const validateReviewCreation = [
    check('rating')
        .exists({ checkFalsy: true })
        .isNumeric()
        .withMessage('Please provide a number.'),
    check('content')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide some content for your review.'),
    handleValidationErrors,
];

// POST to create a new review
router.post('/', requireAuth, validateReviewCreation, asyncHandler(async (req, res) => {
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
    return res.json( {newReview: newReviewWithUserAndDrink })
}))

// PUT to update a single review
router.put('/:id(\\d+)', requireAuth, validateReviewCreation, asyncHandler(async (req, res) => {
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
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const reviewToDeleteId = parseInt(req.params.id, 10);
    const singleReviewToDelete = await db.Review.findByPk(reviewToDeleteId);

    const deletedReview = await singleReviewToDelete.destroy();

    return res.json({ deletedReview});
}));

module.exports = router;