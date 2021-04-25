const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router();
const db = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
    const drinkList = await db.Drink.findAll();
    console.log(drinkList)
    return res.json({ drinkList });
}));

module.exports = router;