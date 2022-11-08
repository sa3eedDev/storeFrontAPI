import express from 'express';


const productsRoutes = (app: express.Application) =>{
    app.get("/products", (_req, res) =>{
        res.send("products API")
    })
}


export default productsRoutes;