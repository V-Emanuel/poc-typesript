import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateSchema<T>(schema: ObjectSchema<T>): ValidationMiddleware {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema
            .validate(req.body,
                { abortEarly: false })
        if (error) {
            const errorMessages = 'validação deu errado';
            return res.status(400).send(errorMessages)
        }
        next()
    }
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;