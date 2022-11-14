import dotenv from "dotenv";
import {Pool} from "pg";

dotenv.config()
const { 
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USERNAME,
  POSTGRES_TEST_DB,
  ENV,
  POSTGRES_PASSWORD } = process.env

let client = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
})
if (ENV === "test"){
   client = new Pool({
   host: POSTGRES_HOST,
   database: POSTGRES_TEST_DB,
   user: POSTGRES_USERNAME,
   password: POSTGRES_PASSWORD,
  })
}

export default client