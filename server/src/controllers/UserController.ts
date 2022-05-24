import { Request, Response } from 'express';

const { v4: uuidv4 } = require('uuid');
const client = require('../config/DBConfig');

const getUser = async (req: Request, res: Response) => {
  client.query('SELECT * FROM users', (err: Error, data: any) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(data.rows);
    }
  });
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  client.query('SELECT * FROM users WHERE id = $1', [id], (err: Error, data: any) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.json(data.rows);
    }
  });
};

const createUser = async (req: Request, res: Response) => {
  const { firstName, middleName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      message: 'Please enter all required fields',
    });
  }

  // Check if another user with the same email exists
  client.query('SELECT * FROM users WHERE email = $1', [email], (err: Error, data: any) => {
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

  // Create a new user
  client.query(
    'INSERT INTO users (id, first_name, middle_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5, $6)',
    [uuidv4(), firstName, middleName, lastName, email, password],
    (err: Error) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong',
        });
      } else {
        res.status(201).json({
          message: 'User created successfully',
        });
      }
    }
  );
};

const updateUser = async (req: Request, res: Response) => {
  const { id, firstName, middleName, lastName, email } = req.body;

  if (!firstName || !lastName || !email || !id) {
    res.status(400).json({
      message: 'Please enter all required fields',
    });

    // Replace all fields in the user
  } else {
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
  }
};

module.exports = { getUser, getUserById, createUser, updateUser };
