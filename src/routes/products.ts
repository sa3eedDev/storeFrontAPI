import { Router } from 'express';
import { indexProducts, showProduct, createProduct } from '../handlers/products';
import { verifyAuthToken } from '../middlewares/validetor';


const productsRoutes = Router()

productsRoutes.get("/", indexProducts)
productsRoutes.get("/:id", showProduct)
productsRoutes.post("/", verifyAuthToken ,createProduct)



export default productsRoutes;