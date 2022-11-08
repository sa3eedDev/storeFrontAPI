import express from 'express'
import { createUser, indexUsers, showUser } from '../handlers/users';
import { verifyAuthToken } from '../middlewares/validetor';


const usersRoutes = (app: express.Application) =>{

    app.post("/users", createUser)
    app.get("/users", verifyAuthToken, indexUsers)
    app.get("/users/:id", verifyAuthToken, showUser)
}

export default usersRoutes;