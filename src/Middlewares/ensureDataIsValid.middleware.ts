import { categoryIdSchema } from './../schema/Category/categoryId.schema';
import { Request, Response, NextFunction } from "express"
import { AnySchema } from "yup"
import { AppError } from "../errors/AppError";

export const ensureDataIsValidMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isValid = await schema.validate(req.body, {
            stripUnknown: true,
            abortEarly: false
        });
         
    
        req.body = isValid
        return next()
    } catch (error: any) {
        return res.status(400).json({ message: error.errors })
    }
}

export const ensurePatchDataIsValidMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isValid = await schema.validate(req.body, {
            abortEarly: true,
            stripUnknown: true
        });
         
        if (isValid !== req.body) {
            return res.status(401).json({message: "Can't update some fields"})
        }
    
        req.body = isValid
        return next()
    } catch (error: any) {
        return res.status(400).json({ errors: error.errors })
    }
}

export const ensureIdIsValidMiddleware = (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isValid = await schema.validate(req.params, {
            stripUnknown: true,
            abortEarly: false
        });
         
    
        req.body = isValid
        return next()
    } catch (error: any) {
        return res.status(400).json({ message: error.errors })
    }
}

export const ensureIdIsValidFunction = async (data: string) => {
    try {
        const isValid = await categoryIdSchema.validate(data, {
            stripUnknown: true,
            abortEarly: false
        });
    } catch (error: any) {
        throw new AppError(error.errors, 404)
    }
}
