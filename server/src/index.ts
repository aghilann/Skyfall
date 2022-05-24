import express, { Request, Response } from 'express';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || '5000';

// cors
app.use(cors({ origin: '*' }));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Hello World!');
});

app.listen(PORT, (): void => {
  console.log(`Server started on port ${PORT}`);
});
