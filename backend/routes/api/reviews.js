const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router({ mergeParams: true });
const db = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) => {
    const reviewsToGrab = parseInt(req.params.id, 10);
    const reviewsToShow = await db.Review.findByPk(reviewsToGrab);
    return res.json({ reviewsToShow })
}))

module.exports = router;