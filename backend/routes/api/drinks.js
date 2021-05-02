const asyncHandler = require('express-async-handler')
const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const reviewsRouter = require('./reviews.js');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { validationResult, check } = require('express-validator');

// GET a list of all the drinks
router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const drinkList = await db.Drink.findAll({
        include: [db.User]
    });
    return res.json({ drinkList });
}));

// GET a single drink
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const drinkId = parseInt(req.params.id, 10);
    const singleDrink = await db.Drink.findByPk(drinkId, {
        include: [db.User]
    });
    return res.json({ singleDrink });
}));

const validateDrinkCreation = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 100})
        .withMessage('Please provide a title with no more than 100 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .isLength({ min: 1 })
        .withMessage('Please provide a description of this drink.'),
    check('drinkImg')
        .isURL()
        .withMessage('Drink image must be a valid URL.'),
    handleValidationErrors,
];

// POST to create a new drink
router.post('/', requireAuth, validateDrinkCreation, asyncHandler(async (req, res) => {
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

// PUT to update a single drink
router.put('/:id(\\d+)', requireAuth, validateDrinkCreation, asyncHandler(async (req, res) => {
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

// DELETE to delete a single drink
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const drinkIdToDelete = parseInt(req.params.id, 10);
    const singleDrinkToDelete = await db.Drink.findByPk(drinkIdToDelete);

    const deletedDrink = await singleDrinkToDelete.destroy();

    return res.json({deletedDrink});
}));


// NESTING ROUTES TO ACCESS REVIEWS THROUGH DRINKS PATH
router.use('/:id(\\d+)/reviews', reviewsRouter);

module.exports = router;