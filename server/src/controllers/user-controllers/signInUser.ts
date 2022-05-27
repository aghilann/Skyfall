import { Request, Response } from 'express';

import { IData } from './IData';

const bcrypt = require('bcrypt');
const client = require('../../config/DBConfig');

export const signInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: 'Please enter all required fields',
    });
  }

  // Hashing password
  try {
    const data: IData = await client.query('SELECT * FROM users WHERE email = $1;', [email]);

    if (data.rows.length === 0) {
      res.status(404).json({
        message: 'User with that email does not exist',
      });
    } else if (await bcrypt.compare(password, data.rows[0].password)) {
      res.status(200).json({
        message: 'User signed in successfully',
        user: data.rows[0],
      });
    } else {
      res.status(401).json({
        message: 'Wrong Password',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong',
    });
  }
};
