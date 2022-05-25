const express = require('express');
const router = express.Router();
const { getUser, createUser, getUserById, updateUser, signInUser } = require('../controllers/UserController');

router.get('/sign-in', signInUser);
router.route('/').get(getUser).post(createUser).put(updateUser);
router.get('/:id', getUserById);

module.exports = router;
