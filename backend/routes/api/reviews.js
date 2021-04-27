const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../../db/models');

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
router.post('/', asyncHandler(async (req, res)))

module.exports = router;