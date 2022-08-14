"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
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
exports.postLegacy = void 0;
const format = require('date-fns/format');
const client = require('../../config/DBConfig');
const postLegacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userID, recipient, recipientEmail, link } = req.body;
    const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    try {
        const data = yield client.query('INSERT INTO legacy(user_id, recipient, recipient_email, link, date_recorded) VALUES ($1, $2, $3, $4, $5)', [userID, recipient, recipientEmail, link, date]);
        res.json({ message: 'Legacy created successfully' });
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.postLegacy = postLegacy;
