import { createUser, getUser, getUsers, updatePassword, deleteUser  } from '../controllers/user.controller';
import express from 'express';

const routerUser = express.Router();

routerUser.post('/', createUser) // * Create user
routerUser.get('/', getUsers) // * Get all users
routerUser.get('/', getUser) // * Get user by email
routerUser.put('/', updatePassword)  // * Update password
routerUser.delete('/', deleteUser) // * Delete user


export default routerUser;