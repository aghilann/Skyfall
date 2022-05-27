import { Request, Response } from 'express';

import { IData } from './IData';

const client = require('../../config/DBConfig');

export const getUserByID = async (req: Request, res: Response) => {
  client.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err: Error, data: IData) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(data.rows);
    }
  });
};
