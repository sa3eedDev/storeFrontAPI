import { order, orderClass } from "../orders";
import { user, usersClass } from "../users";
import { productClass } from "../products";

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
                    product_id: 3,
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
            active: true,
            user_id: 1,
            id: undefined
        }
        const results = await orders.create(orderTest)
        //@ts-ignores
        expect(results).toBeInstanceOf(order)
    })
})