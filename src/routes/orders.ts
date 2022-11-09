import express from 'express';
import { createOrder } from '../handlers/orders';

const ordersRoutes = (app: express.Application) =>{
    app.post('/orders', createOrder)
}

export default ordersRoutes;