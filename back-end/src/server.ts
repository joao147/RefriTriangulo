import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import './database/connection';

import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
