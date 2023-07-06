import { Request, Response } from 'express';
import { User } from "../models/user.model";
import bcryptjs from 'bcryptjs';

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({ message: "🎈 User found successfully", user: user })
    } catch (error) {
        return res.status(500).json({ message: 'Error', error: error })
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        let { name, username, email, password} = req.body
        const userSearch = await User.findOne({ email })
        if (userSearch) {
            return res.status(409).json({ message: "User already exists", user: userSearch })
        }
        password = await bcryptjs.hash(password, 8)
        const user = await User.create({ name, username, email, password })
        return res.status(201).json({ message: "User created", user: user })
    } catch (error) {
        return res.status(500).json({ message: 'Error creating user', error: error })
    }
}
