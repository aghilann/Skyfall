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
exports.updateUser = void 0;
const client = require('../../config/DBConfig');
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, firstName, middleName, lastName, email } = req.body;
    // Missing fields
    if (!firstName || !lastName || !email || !id) {
        res.status(400).json({
            message: 'Please enter all required fields',
        });
    }
    // Replace all fields in the user
    client.query('UPDATE users SET first_name = $1, middle_name = $2, last_name = $3, email = $4 WHERE id = $5', [firstName, middleName, lastName, email, id], (err) => {
        if (err) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
        else {
            res.status(200).json({
                message: 'User updated successfully',
            });
        }
    });
});
exports.updateUser = updateUser;
