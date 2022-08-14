"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
exports.patchLegacy = void 0;
const client = require('../../config/DBConfig');
const patchLegacy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userID } = req.params;
    try {
        req.body.updates.forEach((update) => __awaiter(void 0, void 0, void 0, function* () {
            const { recipient, recipientEmail, link, id } = update;
            client.query('UPDATE legacy SET recipient = $1, recipient_email = $2, link = $3 WHERE id = $4 AND user_id = $5', [
                recipient,
                recipientEmail,
                link,
                id,
                userID,
            ]);
        }));
        res.status(200).json({ message: 'Success' });
    }
    catch (err) {
        res.status(200).send(err);
    }
});
exports.patchLegacy = patchLegacy;
