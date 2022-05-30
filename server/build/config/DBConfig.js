"use strict";
const { Client } = require('pg');
require('dotenv').config();
const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'postgres',
    port: 5432,
    ssl: true,
};
const client = new Client(config);
client.connect((err) => {
    if (err)
        throw err;
    else {
        console.log('Connected to database');
    }
});
module.exports = client;
