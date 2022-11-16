import { Router } from 'express';
import express from 'express';
import ordersRoutes from './orders';
import productsRoutes from './products';
import usersRoutes from './users';


const router: Router = Router();

// Router for images API
router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/orders', ordersRoutes);


// Defualt homepage
router.get('/', (req: express.Request, res: express.Response): void => {
  res.send(
    'Hello'
  );
});

export default router;