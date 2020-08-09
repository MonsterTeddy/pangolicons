/** @format */

/** This file creates a basic server for the front end */

// import dotent
import dotenv from './config/dotenv.config.mjs';

// import & setup express
import express from 'express';
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('./dist'));
app.use(express.static('./public'));

app.listen(PORT, console.log(`Server listening on Port ${PORT}`));
