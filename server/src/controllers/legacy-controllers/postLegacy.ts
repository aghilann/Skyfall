/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Request, Response } from 'express';

const format = require('date-fns/format');
const client = require('../../config/DBConfig');

export const postLegacy = async (req: Request, res: Response) => {
  const { userID, recipient, recipientEmail, link } = req.body;
  const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  try {
    const data = await client.query(
      'INSERT INTO legacy(user_id, recipient, recipient_email, link, date_recorded) VALUES ($1, $2, $3, $4, $5)',
      [userID, recipient, recipientEmail, link, date]
    );
    res.json({ message: 'Legacy created successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};
