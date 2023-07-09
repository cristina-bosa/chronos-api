import { Request, Response } from 'express';
import { User } from "../models/user.model";
import bcryptjs from 'bcryptjs';

// * Get user by email
export const getUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "❌ User not found" })
        }
        return res.status(200).json({ message: "👌 User found successfully", user: user })
    } catch (error) {
        return res.status(500).json({ message: '❌ --- ', error: error })
    }
}
// * Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({ message: "❌ Users not found" })
        }
        return res.status(200).json({ message: "👌 Users found successfully", users: users })
    } catch (error) { 
        return res.status(500).json({ message: '❌ Error with searching', error: error })
    }
}
// * Create user
export const createUser = async (req: Request, res: Response) => {
    try {
        let { name, username, email, password} = req.body
        const userSearch = await User.findOne({ email })
        if (userSearch) {
            return res.status(409).json({ message: "❌ User already exists", user: userSearch })
        }
        password = await bcryptjs.hash(password, 8)
        const user = await User.create({ name, username, email, password })
        return res.status(201).json({ message: " 👌 User created", user: user })
    } catch (error) {
        return res.status(500).json({ message: '❌ Error creating user', error: error })
    }
}

// * Update user
export const updatePassword = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "❌ User not found" })
        }
        const newPassword = await bcryptjs.hash(password, 8)
        if(newPassword === user.password){
            return res.status(409).json({ message: "❌ New password is the same as the old one" })
        }
        user.password = newPassword;
        await user.save();
        return res.status(200).json({ message: "👌 Password updated successfully", user: user })
    } catch (error) {
        return res.status(500).json({ message: '❌ Error updating user', error: error })
    }
}

// * Delete user
export const deleteUser = async (req: Request, res: Response) => { 
    try {
        const { email } = req.body
        const deletedUser = await User.deleteOne({ email })
        if (!deletedUser) {
            return res.status(404).json({ message: "❌ User not found" })
        }
        res.status(200).json({ message: "👌 User deleted successfully" })
            
    } catch (error) {
        return res.status(500).json({ message: '❌ Error deleting user', error: error })
    }
}