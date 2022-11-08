// @ts-ignore
import client from "../database";
import bcrypt from 'bcrypt';


export type user = {
    id: number
    firstname: string
    lastname: string
    password: string
}

export class usersClass {
    async index(): Promise<user[]>{
        try {
            const sql = 'SELECT * from users'
            const conn = await client.connect()
            const results = await conn.query(sql)
            conn.release()
            return results.rows
        } catch (error) {
            throw new Error("Cannot Index users")
        }
    }
    async create(user: user): Promise<user>{
        try {
            const pepper = process.env.SALT
            const rounds = process.env.SALT_ROUNDS 
            const hash = bcrypt.hashSync(user.password + pepper, parseInt(rounds as string) )
            let values = [user.firstname, user.lastname, hash]
            const sql = 'INSERT INTO users (firstname, lastname, password) VALUES ($1, $2, $3) RETURNING *'


            const conn = await client.connect()
            const results = await conn.query(sql, values)
            conn.release()
            return results.rows[0]

        } catch (error) {
            throw new Error (`An error happened during creating a user ${error}`)
        }
        
    }
}