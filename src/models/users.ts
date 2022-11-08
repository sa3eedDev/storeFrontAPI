// @ts-ignore
import client from "../database";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';


export type user = {
    id: number
    firstname: string
    lastname: string
    password: string
}

export class usersClass {
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