import client from "../database";

export type product = {
    id: number
    name: string
    price : string
}

export class productClass {
    async index(): Promise<product[]>{
        try {
            const sql = 'SELECT * from products'
            const conn = await client.connect()
            const results = await conn.query(sql)
            conn.release()
            return results.rows

        } catch (error) {
            throw new Error ('An error happened during indexing products')
        }
    }
    async show(id: number): Promise<product> {
        try {
            const sql = 'SELECT * FROM products where id=($1)'
            const conn = await client.connect()
            const results = await conn.query(sql, [id])
            conn.release()

            return results.rows[0]
        } catch (error) {
            throw new Error('an error happened during show product')
        }
    }
    async create(p: product): Promise<product>{
        try {
            const sql = 'INSERT INTO products (name, price) VALUES ($1,$2) RETURNING *'
            let values = [p.name, p.price]

            const conn = await client.connect()
            const results = await conn.query(sql, values)
            conn.release()
            return results.rows[0]
        } catch (error) {
            throw new Error('an error happened during creating a new product')
        }
    }
}