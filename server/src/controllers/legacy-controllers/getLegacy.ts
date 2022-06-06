/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { Request, Response } from 'express';

const mockData = [
  {
    id: 1,
    recipient: 'John Does',
    recipientEmail: 'johndoe@gmail.com',
    recipientPhoneNumber: '403-400-3726',
    link: 'https://www.google.com',
    dateRecorded: '2020-01-01',
  },
  {
    id: 2,
    recipient: 'John Doea',
    recipientEmail: 'johndoe@gmail.com',
    recipientPhoneNumber: '403-400-3726',
    link: 'https://www.google.com',
    dateRecorded: '2020-01-01',
  },
  {
    id: 3,
    recipient: 'John Doet',
    recipientEmail: 'johndoe@gmail.com',
    recipientPhoneNumber: '403-400-3726',
    link: 'https://www.google.com',
    dateRecorded: '2020-01-01',
  },
  {
    id: 4,
    recipient: 'John Doeu',
    recipientEmail: 'johndoe@gmail.com',
    recipientPhoneNumber: '403-400-3726',
    link: 'https://www.google.com',
    dateRecorded: '2020-01-01',
  },
];

export const getLegacy = (req: Request, res: Response) => {
  res.send(mockData);
};
