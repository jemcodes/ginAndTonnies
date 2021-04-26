const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router();
const db = require('../../db/models');

// GET a list of all the drinks
router.get('/', asyncHandler(async (req, res) => {
    const drinkList = await db.Drink.findAll({
        include: [db.User]
    });
    // console.log('THIS IS THE DRINK LIST:', drinkList)
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

// POST to create a new drink
router.post('/', asyncHandler(async (req, res) => {
    const { title, content, drinkImg, userId } = req.body;

    const newDrink = await db.Drink.create( {
        title,
        content,
        drinkImg,
        userId
    });

    const newDrinkWithUser = await db.Drink.findByPk(newDrink.id, {
        include: [db.User]
    });
    return res.json( { newDrink: newDrinkWithUser });
}));

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const drinkToUpdateId = parseInt(req.params.id, 10);
    const singleDrinkToUpdate = await db.Drink.findByPk(drinkToUpdateId);

    const { title, content, drinkImg, userId } = req.body;

    const updatedDrink = await singleDrinkToUpdate.update({
        title,
        content,
        drinkImg,
        userId
    });

    const updatedDrinkWithUser = await db.Drink.findByPk(updatedDrink.id, {
        include: [db.User]
    });
    return res.json({ updatedDrink: updatedDrinkWithUser });
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const drinkId = parseInt(req.params.id, 10);
    const singleDrink = await db.Drink.findByPk(drinkId);
    
    if (singleDrink) {
        await singleDrink.destroy();
    }

}));

module.exports = router;