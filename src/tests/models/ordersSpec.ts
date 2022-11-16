import { order, orderClass } from "../../models/orders";
import { user, usersClass } from "../../models/users";
import { productClass } from "../../models/products";

const orders = new orderClass()
const users = new usersClass()
const products = new productClass()

describe("testing if order models are defind", ()=>{
    it("Check create product is defined", ()=>{
        expect(orders.create).toBeDefined();
    });
    it("Check show order is defined", ()=>{
        expect(orders.show).toBeDefined();
    });
})

describe("test order model functions", ()=>{
    beforeAll( async()=>{
        const test: user= {
            id: undefined,
            firstname: "test",
            lastname: "last",
            password: "Test101"
        }
        await users.create(test);
        await products.create({
            id: undefined,
            name: "Test product",
            price: "300"
        })
    })
    it("Create an order", async ()=>{
        const orderTest: order = {
            products: [
                {
                    id: undefined,
                    product_id: 1,
                    order_id: undefined,
                    quantity: 3
                },
                {
                    id: undefined,
                    product_id: 1,
                    order_id: undefined,
                    quantity: 5
                }
            ],
            state_of_order: true,
            user_id: 1,
            id: undefined
        }
        const orderExpect: order=  {
            products: [
                {
                    id: 1,
                    product_id: "1",
                    order_id: "1",
                    quantity: 3
                },
                {
                    id: 2,
                    product_id: "1",
                    order_id: "1",
                    quantity: 5
                }
            ],
            state_of_order: true,
            user_id: "1",
            id: 1
        }
        const results = await orders.create(orderTest)
        expect(results).toEqual(orderExpect)
    })
})