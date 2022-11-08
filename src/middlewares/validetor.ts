import { Request, Response, NextFunction } from "express"
import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';


export const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization as string;
        const token = authorizationHeader.split(' ')[1];
        const decode = jsonwebtoken.verify(token, (process.env.TOKEN_SECRET as string) );

        next()
    } catch (error) {
        res.status(401)
        next(error)
    }
}

