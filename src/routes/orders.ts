import express from 'express';
import { createOrder, showOrder } from '../handlers/orders';

const ordersRoutes = (app: express.Application) =>{
    app.post('/orders', createOrder)
    app.get("/orders/:id", showOrder)
}

export default ordersRoutes;