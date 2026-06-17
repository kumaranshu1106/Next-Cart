import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config'

const app = express();
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(','),
    credentials: true
}))



export default app;