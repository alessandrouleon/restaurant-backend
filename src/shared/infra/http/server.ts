import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import AppErrors from '@shared/errors/AppErrors';

import '../typeorm/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppErrors) {
        return res
            .status(err.statusCode)
            .json({ status: 'error', message: err.message })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error!'
    });
});

app.listen(port, () => {
    console.log(`Server running 🌠 on port ${port}`);
});

