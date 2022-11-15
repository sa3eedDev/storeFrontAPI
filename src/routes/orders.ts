import express from 'express';
import { createOrder, showOrder } from '../handlers/orders';
import { verifyAuthToken } from '../middlewares/validetor';

const ordersRoutes = (app: express.Application) =>{
    app.post('/orders', createOrder)
    app.get("/orders/:id",  verifyAuthToken,showOrder)
}

export default ordersRoutes;