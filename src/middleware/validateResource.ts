import { NextFunction,Request,Response } from "express";
import { AnyZodObject } from 'zod'
import logger from '../utils/logger';

const validate = (schema : AnyZodObject) => (req: Request,res: Response , next: NextFunction) => {
    try {
        schema.parse({
            body : req.body,
            query : req.query,
            params : req.params
        })
    } catch (error : any) {
        logger.error(error);
        return res.status(400).send(error.errors);
    }
}

export default validate;