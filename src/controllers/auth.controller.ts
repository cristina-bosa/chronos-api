import { Request, Response } from "express";
import { createUser } from "../controllers/user.controller";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";

//log into
export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message:
                    "Uh-oh! The email and password fields are mandatory. Please make sure to complete them before proceeding",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message:
                    "Oh no! It seems that the combination of email and password you entered is incorrect. Please double-check your information and try again",
            });
        }
        let passIsValid = bcrypt.compareSync(password, user.password);
        if (!passIsValid) {
            return res.status(401).json({
                message:
                    "Oh no! It seems that the combination of email and password you entered is incorrect. Please double-check your information and try again",
            });
        }
        return res.status(200).json({
            message: "Congratulations! Access granted. Welcome aboard",
            user: user,
        });
    } catch (error) {
        return res.status(500).json({
            message:
                "Oops! Something went wrong on our end. We're experiencing technical difficulties. Please try again later",
            error: error,
        });
    }
};
//create account
export const signUp = async (req: Request, res: Response) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message:
                    "Oops! It looks like there are missing fields that need your attention. Please fill them all in to proceed",
            });
        }
        await createUser(req, res);
    } catch (error) {
        return res.status(500).json({
            message:
                "Oops! Something went wrong on our end. We're experiencing technical difficulties. Please try again later",
            error: error,
        });
    }
};
