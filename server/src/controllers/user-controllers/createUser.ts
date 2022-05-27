import { Request, Response } from 'express';

import { IData } from './IData';

const bcrypt = require('bcrypt');
const format = require('date-fns/format');
const { v4: uuidv4 } = require('uuid');
const client = require('../../config/DBConfig');

export const createUser = async (req: Request, res: Response) => {
  const { firstName, middleName, lastName, email, password } = req.body;
  console.log(' I AM RUN');
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      message: 'Please enter all required fields',
    });
  }

  // Check if another user with the same email exists
  client.query('SELECT * FROM users WHERE email = $1', [email], (err: Error, data: IData) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong',
      });
    } else if (data.rows.length > 0) {
      res.status(400).json({
        message: 'User already exists',
      });
    }
  });

  // Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user and inserting into DB
  client.query(
    'INSERT INTO users (id, first_name, middle_name, last_name, email, password, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    [uuidv4(), firstName, middleName, lastName, email, hashedPassword, format(new Date(), 'MM/dd/yyyy')],
    (err: Error) => {
      if (err) {
        res.status(500).json({
          message: { 'Something went wrong': err.message },
        });
      } else {
        res.status(201).json({
          message: 'User created successfully',
        });
      }
    }
  );
};
