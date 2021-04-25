const asyncHandler = require('express-async-handler');

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const drinksRouter = require('./drinks.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/drinks', drinksRouter);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});


// /* Test setTokenCookie - grab demo user and call setTokenCookie()  */
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// /* Test restoreUser - see if req.user key populates correctly by middleware  */
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// /* Test requireAuth - return session user info if it exists - 
// return an error if not  */
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );


module.exports = router;