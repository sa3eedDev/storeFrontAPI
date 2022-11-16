# Storefront Backend Project

## Commands:

### Install Packages:
`npm i`

### Run the server:
`npm run start`

### run the server on watch:
`npm run watch`

### test the server:
`npm run test`

### Database migration:
`db-migrate up`

### Start postgres Docker:
`docker-compose up`

## Postgres Info:

### username : postgres
### password: password123
### port: 5432
### database: store
### databese for testing: store_test


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