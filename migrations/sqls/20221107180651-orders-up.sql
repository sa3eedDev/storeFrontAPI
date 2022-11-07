CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id bigint references users(id),
    state_of_order boolean  
)