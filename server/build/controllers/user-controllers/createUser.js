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
exports.createUser = void 0;
const bcrypt = require('bcrypt');
const format = require('date-fns/format');
const { v4: uuidv4 } = require('uuid');
const client = require('../../config/DBConfig');
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, middleName, lastName, email, password } = req.body;
    console.log(' I AM RUN');
    if (!firstName || !lastName || !email || !password) {
        res.status(400).json({
            message: 'Please enter all required fields',
        });
    }
    // Check if another user with the same email exists
    client.query('SELECT * FROM users WHERE email = $1', [email], (err, data) => {
        if (err) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
        else if (data.rows.length > 0) {
            res.status(400).json({
                message: 'User already exists',
            });
        }
    });
    // Hashing Password
    const hashedPassword = yield bcrypt.hash(password, 10);
    // Create a new user and inserting into DB
    client.query('INSERT INTO users (id, first_name, middle_name, last_name, email, password, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7)', [uuidv4(), firstName, middleName, lastName, email, hashedPassword, format(new Date(), 'MM/dd/yyyy')], (err) => {
        if (err) {
            res.status(500).json({
                message: { 'Something went wrong': err.message },
            });
        }
        else {
            res.status(201).json({
                message: 'User created successfully',
            });
        }
    });
});
exports.createUser = createUser;
