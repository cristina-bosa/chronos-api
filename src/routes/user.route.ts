import express from 'express';
import { getUser, createUser } from '../controllers/user.controller';

const routerUser = express.Router();

routerUser.get('/user/:id', getUser)
routerUser.post('/user', createUser)

export default routerUser;