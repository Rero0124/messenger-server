import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 5000;
const prisma = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
    res.send('run');
})

app.listen(port, () => {
    console.log('server start');
})