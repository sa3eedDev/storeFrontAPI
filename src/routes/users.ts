import { Router } from 'express';
import { createUser, indexUsers, showUser } from '../handlers/users';
import { verifyAuthToken } from '../middlewares/validetor';

const usersRoutes = Router()


usersRoutes.post("/", createUser)
usersRoutes.get("/", verifyAuthToken, indexUsers)
usersRoutes.get("/:id", verifyAuthToken, showUser)


export default usersRoutes;