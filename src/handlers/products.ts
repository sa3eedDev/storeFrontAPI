import { NextFunction, Request, Response } from "express";
import { product, productClass } from "../models/products";

const products = new productClass()

export async function indexProducts(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const results = await products.index()
        res.json(results)
    } catch (error) {
        next(error);
    }
}

export async function showProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const id = +req.params.id
        const results = await products.show(id)
        res.json(results)
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const product: product = req.body
        const results = await products.create(product)
        res.json(results)
    } catch (error) {
        next(error)
    }
}