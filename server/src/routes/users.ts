const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, signInUser, updateUser } = require('../controllers/user-controllers/index');

router.get('/sign-in', signInUser);
router.route('/').get(getAllUsers).post(createUser).put(updateUser);

module.exports = router;
