import express from 'express'
import { createUser } from '../handlers/users';


const usersRoutes = (app: express.Application) =>{
    app.get('/users', (_req,res) =>{
        res.send("users api")
    })
    app.post("/users", createUser)
}

export default usersRoutes;