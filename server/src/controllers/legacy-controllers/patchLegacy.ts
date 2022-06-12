/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response } from 'express';

const client = require('../../config/DBConfig');

export const patchLegacy = async (req: Request, res: Response) => {
  const { id: userID } = req.params;
  try {
    req.body.updates.forEach(async (update: any) => {
      const { recipient, recipientEmail, link, id } = update;
      client.query('UPDATE legacy SET recipient = $1, recipient_email = $2, link = $3 WHERE id = $4 AND user_id = $5', [
        recipient,
        recipientEmail,
        link,
        id,
        userID,
      ]);
    });
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    res.status(200).send(err);
  }
};
