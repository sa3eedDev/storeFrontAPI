import express from 'express'


const usersRoutes = (app: express.Application) =>{
    app.get('/users', (_req,res) =>{
        res.send("users api")
    })
}

export default usersRoutes;