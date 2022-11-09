import { NextFunction, Request, Response } from "express";
import { order, orderClass } from "../models/orders";

const orderC = new orderClass()


export async function createOrder(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const order = req.body
        const results = await orderC.create(order)
        res.json(results)
    } catch (error) {
        next(error)
    }
}