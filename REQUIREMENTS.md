# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index [GET] `/products`
- Show  [GET] `/products/:id`
- Create [token required] [POST] `/products` body: `{name: "NAME", price: "300"}`
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] [GET] `/users`
- Show [token required] [GET] `/users/:id`
- Create N[token required] [POST] `/users` body: `{firstname: "firstname", lastname: "lastname", password: "password"}`

#### Orders
- Current Order by user (args: user id)[token required] [GET] `/orders/:id`
- Create Order [POST] `/orders` body: 
  ```json
  {
    "products":[
        {
            "product_id": "3",
            "quantity": "3"
        },
        {
            "product_id": "1",
            "quantity": "5"
        }
    ],
    "state_of_order": true,
    "user_id": "1"
    }
  ```
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## env file
```
POSTGRES_USERNAME = postgres
POSTGRES_PASSWORD = password123
POSTGRES_HOST = localhost
POSTGRES_DB = store
POSTGRES_TEST_DB = store_test
SALT = StoreFrontAPI
SALT_ROUNDS = 3
TOKEN_SECRET = itIsJustAToken
ENV = dev
```
## database.json
```json
{
    "dev": {
        "driver": "pg",
        "user": "postgres",
        "password": "password123",
        "host": "localhost",
        "database": "store"
      },
    "test": {
        "driver": "pg",
        "user": "postgres",
        "password": "password123",
        "host": "localhost",
        "database": "store_test"
    }
}
```
## Database Schema
```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstname varchar,
    lastname varchar,
    password varchar
)
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150),
    price money
)
CREATE TABLE orders_products(
    id SERIAL PRIMARY KEY,
    order_id bigint references orders(id),
    product_id bigint references products(id),
    quantity integer
)
CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id bigint references users(id),
    state_of_order boolean  
)
```

