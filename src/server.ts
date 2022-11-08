import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users';
import productsRoutes from './routes/products';
import ordersRoutes from './routes/orders';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())

usersRoutes(app)
productsRoutes(app)
ordersRoutes(app)

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
