import { Request, Response } from 'express';

import { IData } from './IData';

const client = require('../../config/DBConfig');

export const getAllUsers = async (req: Request, res: Response) => {
  client.query('SELECT * FROM users', (err: Error, data: IData) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(data.rows);
    }
  });
};
