import express from "express";
import { Request, Response } from 'express';
import { getUser, createUser } from "../controllers/user.controller";
import { User } from "../models/user.model";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: 'Email and password are required'});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        return res.status(200).json({message: "🎈 Login with success", user: user})
    }catch (error) {
        return res.status(500).json({message: 'Was an error', error: error});
    }
}

export const sigin = async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body;
        if(!name || !username || !email || !password){
            return res.status(400).json({message: 'All fields are required'});
        }
        await createUser(req, res);
        console.log(createUser);
        
    } catch (error) {
        return res.status(500).json({message: 'Was an error', error: error});
    }
}