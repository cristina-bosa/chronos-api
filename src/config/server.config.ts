import express, { Application } from 'express';
import connectDB from './database.config';
import dotenv from 'dotenv';

//*import routers
import userRouters from '../routes/user.route';
import authRouters from '../routes/auth.route';

dotenv.config();

const app: Application = express();

connectDB();

app.use(express.json());

//* Routers
app.use('/api/user', userRouters);
app.use('/api/auth', authRouters);

export default app