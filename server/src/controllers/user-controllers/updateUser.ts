import { Request, Response } from 'express';

const client = require('../../config/DBConfig');

export const updateUser = async (req: Request, res: Response) => {
  const { id, firstName, middleName, lastName, email } = req.body;

  // Missing fields
  if (!firstName || !lastName || !email || !id) {
    res.status(400).json({
      message: 'Please enter all required fields',
    });
  }

  // Replace all fields in the user
  client.query(
    'UPDATE users SET first_name = $1, middle_name = $2, last_name = $3, email = $4 WHERE id = $5',
    [firstName, middleName, lastName, email, id],
    (err: Error) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong',
        });
      } else {
        res.status(200).json({
          message: 'User updated successfully',
        });
      }
    }
  );
};
