import { createScheduleService } from './../services/Schedules/creatSchedule.service';
import { IScheduleRequest } from './../interfaces/schedules/index';
import { Request, Response } from "express";

export const createScheduleController = async (req: Request, res: Response) => {
    const data: IScheduleRequest = req.body
    const response = await createScheduleService(data)

    return res.status(201).json(response)
}