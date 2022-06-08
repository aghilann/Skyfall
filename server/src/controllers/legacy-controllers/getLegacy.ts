/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Request, Response } from 'express';

const format = require('date-fns/format');
const client = require('../../config/DBConfig');
const mockData: any = [];

interface LegacyType {
  user_id: string;
  recipient: string;
  recipient_email: string;
  link: string;
  date_recorded: string;
  id: number;
}

const converter = (data: LegacyType) => {
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

export const getLegacy = async (req: Request, res: Response) => {
  const { id: userID } = req.params;
  try {
    const data = await client.query('SELECT * FROM legacy WHERE user_id = $1', [userID]);
    const result = data.rows.map((item: LegacyType) => converter(item));
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
