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
exports.getLegacy = void 0;
const format = require('date-fns/format');
const client = require('../../config/DBConfig');
const mockData = [];
const converter = (data) => {
    const { user_id: userID, recipient, recipient_email: recipientEmail, link, date_recorded: dateRecorded, id } = data;
    return {
        userID,
        recipient,
        recipientEmail,
        link,
        dateRecorded,
        id,
    };
};
const getLegacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userID } = req.params;
    try {
        const data = yield client.query('SELECT * FROM legacy WHERE user_id = $1', [userID]);
        const result = data.rows.map((item) => converter(item));
        res.json(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getLegacy = getLegacy;
