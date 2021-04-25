const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router();
const db = require('../../db/models');

// GET a list of all the drinks
router.get('/', asyncHandler(async (req, res) => {
    const drinkList = await db.Drink.findAll();
    console.log(drinkList)
    return res.json({ drinkList });
}));

// GET a single drink
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const drinkId = parseInt(req.params.id, 10);
    const singleDrink = await db.Drink.findByPk(drinkId, {
        include: [db.User]
    });
    return res.json({ singleDrink });
}));

module.exports = router;