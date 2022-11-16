import {Router} from 'express';
import { createOrder, showOrder } from '../handlers/orders';
import { verifyAuthToken } from '../middlewares/validetor';


const ordersRoutes = Router()

ordersRoutes.post('/', createOrder)
ordersRoutes.get("/:id",  verifyAuthToken,showOrder)

export default ordersRoutes;