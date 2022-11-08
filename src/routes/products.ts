import express from 'express';
import { indexProducts, showProduct, createProduct } from '../handlers/products';
import { verifyAuthToken } from '../middlewares/validetor';


const productsRoutes = (app: express.Application) =>{
    app.get("/products", indexProducts)
    app.get("/products/:id", showProduct)
    app.post("/products", verifyAuthToken ,createProduct)
}


export default productsRoutes;