/*import { Request, Response } from 'express';
import { timeControl } from "../models/timeControl.model";

export const startTimeControl = async (req: Request, res: Response) => {
    try {
        const { date } = req.body;
        const timeControl = await timeControl.create({ date });
        return res.status(201).json({ message: "Time control created", timeControl: timeControl});
    } catch (error) {
        return res.status(500).json({message: 'Error creating time control', error: error});
    }
    

}*/