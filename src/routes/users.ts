import express from 'express'
import { createUser, indexUsers } from '../handlers/users';
import { verifyAuthToken } from '../middlewares/validetor';


const usersRoutes = (app: express.Application) =>{

    app.post("/users", createUser)
    app.get("/users", verifyAuthToken, indexUsers)
}

export default usersRoutes;