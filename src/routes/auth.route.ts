import express from 'express';
import { signIn, signUp } from '../controllers/auth.controller';

const routerAuth = express.Router();

//log into
routerAuth.post('/signin', signIn);

//create account
routerAuth.post('/signup', signUp);

export default routerAuth;
