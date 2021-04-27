const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../../db/models');

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

module.exports = router;