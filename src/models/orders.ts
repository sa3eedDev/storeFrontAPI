import client from "../database";
import { product } from "./products";

export type order_product = {
    id: number | undefined
    product_id: number | string
    order_id: number | undefined | string
    quantity: number
}

export type order = {
    id: number | undefined,
    products: order_product[]
    state_of_order: boolean
    user_id : number | string
}

export class orderClass{
    async create(o: order): Promise<order>{
        try {
            const sql = 'INSERT INTO orders (user_id, state_of_order) VALUES ($1,$2) RETURNING *'
            const values = [o.user_id, o.state_of_order]


            const conn = await client.connect()
            const results = await conn.query(sql, values)
            let order = results.rows[0]
            order.products = []
            for(let product of o.products){
                const sqlp = 'INSERT INTO orders_products (order_id, product_id, quantity) VALUES ($1,$2,$3) RETURNING *'
                let values = [order.id, product.product_id, product.quantity ]

                const results = await conn.query(sqlp, values)
                order.products.push(results.rows[0])
            }
            conn.release()
            return order;

        } catch (error) {
            throw new Error(`An Error happened during creating an order: ${error}`)
        }
    }
    async show(id: number): Promise<order[]>{
        try {
            const sql = "SELECT * FROM orders WHERE id=($1)"
            const conn = await client.connect()
            const results = await conn.query(sql, [id])
            conn.release()

            return results.rows
        } catch (error) {
            throw new Error("An error happened during showing user order")
        }
    }
}