"use strict";
const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, signInUser, updateUser, getUserByID, } = require('../controllers/user-controllers/index');
// Sign in will redirect to :id
router.get('/sign-in', signInUser);
router.route('/').get(getAllUsers).post(createUser).put(updateUser);
router.get('/:id', getUserByID);
module.exports = router;
