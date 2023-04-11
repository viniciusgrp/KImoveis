import { createScheduleController } from './../controllers/schedules.controller';
import { userAuthMiddleware } from './../Middlewares/Users/userRights.middleware';
import { Router } from 'express';

const schedulesRoutes = Router()

schedulesRoutes.post('', userAuthMiddleware, createScheduleController)

export default schedulesRoutes