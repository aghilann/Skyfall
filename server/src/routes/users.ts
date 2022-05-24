const express = require('express');
const router = express.Router();
const { getUser, createUser, getUserById, updateUser } = require('../controllers/UserController');

router.get('/:id', getUserById);

router.route('/').get(getUser).post(createUser).put(updateUser);

module.exports = router;
