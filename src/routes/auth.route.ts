import express from 'express';
import { signIn, signUp } from '../controllers/auth.controller';

const routerAuth = express.Router();

//log into
routerAuth.post('/auth/signin', signIn);

//create account
routerAuth.post('/auth/signup', signUp);

export default routerAuth;
