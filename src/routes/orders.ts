import express from 'express';

const ordersRoutes = (app: express.Application) =>{
    app.get('/orders', (_req,res) =>{
        res.send('orders API')
    })
}

export default ordersRoutes;