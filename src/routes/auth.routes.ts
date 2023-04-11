import { authSchema } from './../schema/Auth/auth.schema';
import { ensurePatchDataIsValidMiddleware } from './../Middlewares/ensureDataIsValid.middleware';
import { authController } from './../controllers/auth.controller';
import { Router } from "express";

const authRoutes = Router()

authRoutes.post('', ensurePatchDataIsValidMiddleware(authSchema), authController)

export default authRoutes