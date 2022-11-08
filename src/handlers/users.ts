import { NextFunction, Request, Response } from "express";
import { user, usersClass } from "../models/users";

const users = new usersClass();

export async function createUser(req: Request, res: Response, next: NextFunction){

    try {
        const userInfo: user = req.body
        const results = await users.create(userInfo)
        res.json(results)
    } catch (error) {
        next(error);
    }
}