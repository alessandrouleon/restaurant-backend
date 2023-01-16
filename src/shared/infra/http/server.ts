import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import * as dotenv from 'dotenv';
import AppError from '@shared/errors/AppError';

import '../typeorm/database';
import '@shared/container';
import './routes';
import { router } from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, reqest: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error!'
    });
});

app.listen(port, () => {
    console.log(`Server running 🌠 on port ${port}`);
});

