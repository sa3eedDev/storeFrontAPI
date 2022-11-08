import { NextFunction, Request, Response } from "express";
import { user, usersClass } from "../models/users";
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';

const users = new usersClass();

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void>{

    try {
        const userInfo: user = req.body
        const results = await users.create(userInfo)
        const verify = jsonwebtoken.sign({id: results.id, firstname: results.firstname, lastname: results.firstname}, (process.env.TOKEN_SECRET as string))
        res.json([results, verify])
    } catch (error) {
        next(error);
    }
}

export async function indexUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const results = await users.index()

        res.json(results)
    } catch (error) {
        next(error)
    }
}

export async function showUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const results = await users.show(+req.params.id)
        res.json(results)
    } catch (error) {
        next(error)
    }
    
}