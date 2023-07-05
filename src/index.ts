import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routerUser from './routes/user.route';

const app = express();
app.use(cors({
    credentials: true,
}))

app.use(bodyParser.json());

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
});

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', routerUser);