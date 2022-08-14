"use strict";
const userExpress = require('express');
const userRouter = userExpress.Router();
const { createUser, getAllUsers, signInUser, updateUser, getUserByID, } = require('../controllers/user-controllers/index');
// Sign in will redirect to :id
userRouter.post('/sign-in', signInUser);
userRouter.route('/').get(getAllUsers).post(createUser).put(updateUser);
userRouter.get('/:id', getUserByID);
module.exports = userRouter;
