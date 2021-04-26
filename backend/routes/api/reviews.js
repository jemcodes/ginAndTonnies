const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router();
const db = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const reviewList = await db.Review.findAll({
        include: [db.User, db.Drink]
    });
    return res.json({ reviewList })
}))

module.exports = router;