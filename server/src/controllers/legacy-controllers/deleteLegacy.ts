/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Request, Response } from 'express';

const client = require('../../config/DBConfig');

export const deleteLegacy = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(id);
  try {
    const data = await client.query('DELETE FROM legacy WHERE id = $1', [id]);
    res.json({ message: 'Legacy deleted successfully' });
  } catch (err) {
    res.status(500).send(err);
  }
};
