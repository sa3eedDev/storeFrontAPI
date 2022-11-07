CREATE TABLE orders_products(
    id SERIAL PRIMARY KEY,
    order_id bigint references orders(id),
    product_id bigint references products(id),
    quantity integer
)