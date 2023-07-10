import { TimeControl } from '../models/timeControl.model';
import { User } from '../models/user.model';
import { Request, Response } from 'express';

export const startTimeControl = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        const idUser = user._id
        const date = Date.now();
        const timeControl = await TimeControl.create({ startDate: date, user: idUser });
        return res.status(201).json({ message: "Time control started", timeControl: timeControl });
    } catch (error) {
        return res.status(500).json({message: 'Error creating time control', error: error});       
    }
}