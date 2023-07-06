import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import startDB from './database/database.config';
import routerUser from './routes/user.route';
import routerAuth from './routes/auth.route';

const app = express();
app.use(cors({
    credentials: true,
}))

app.use(bodyParser.json());

dotenv.config();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server has awakened! Prepare for a magical coding journey! ✨💻✨`)
});

startDB();
/* mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', (error: Error) => console.log(error)); */

app.use('/', routerUser);
app.use('/auth', routerAuth);