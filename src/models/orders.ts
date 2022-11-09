import client from "../database";
import { product } from "./products";

export type order_product = {
    id: number 
    product_id: number
    order_id: number
    quantity: number
}

export type order = {
    id: number,
    products: order_product[]
    active: boolean
    user_id : number
}

export class orderClass{
    async create(o: order): Promise<order>{
        try {
            const sql = 'INSERT INTO orders (user_id, state_of_order) VALUES ($1,$2) RETURNING *'
            const values = [o.user_id, o.active]


            const conn = await client.connect()
            const results = await conn.query(sql, values)
            let order = results.rows[0]
            order.products = []
            for(let product of o.products){
                const sqlp = 'INSERT INTO orders_products (order_id, product_id, quantity) VALUES ($1,$2,$3) RETURNING *'
                let values = [order.id, product.product_id, product.quantity ]

                const results = await conn.query(sqlp, values)
                console.log(results.rows[0])
                order.products.push(results.rows[0])
            }
            return order;

        } catch (error) {
            throw new Error("An Error happened during creating an order")
        }
    }
}