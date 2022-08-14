"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = void 0;
const bcrypt = require('bcrypt');
const client = require('../../config/DBConfig');
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: 'Please enter all required fields',
        });
    }
    // Hashing password
    try {
        const data = yield client.query('SELECT * FROM users WHERE email = $1;', [email]);
        if (data.rows.length === 0) {
            res.status(404).json({
                message: 'User with that email does not exist',
            });
        }
        else if (yield bcrypt.compare(password, data.rows[0].password)) {
            const { id, first_name: firstName, middle_name: middleName, last_name: lastName, email, date_created: dateCreated, } = data.rows[0];
            // Redirect to designated Route
            const myData = {
                id,
                firstName,
                middleName,
                lastName,
                email,
                dateCreated,
            };
            res.json(myData);
            // res.status(200).redirect(`/api/users, ${id}`);
        }
        else {
            res.status(401).json({
                message: 'Wrong Password',
            });
        }
    }
    catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
        });
    }
});
exports.signInUser = signInUser;
