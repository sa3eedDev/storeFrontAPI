import { product, productClass } from "../products";

const products = new productClass()

describe("testing if Product models are defind", ()=>{
    it("Check create product is defined", ()=>{
        expect(products.create).toBeDefined();
    });
    it("Check index products is defined", ()=>{
        expect(products.index).toBeDefined();
    });
    it("Check show product is defined", ()=>{
        expect(products.show).toBeDefined();
    });
})

describe("test product models functions", ()=>{
    it("test product index",async () => {
        const results = await products.index()
        expect(results.length).toBeGreaterThanOrEqual(0)
    })
    it("test product creation", async ()=>{
        const results = await products.create({
            id: undefined,
            name: "Test product",
            price: "300"
        })
        expect({name: results.name, price: results.price}).toEqual({
            name: "Test product",
            price: "$300.00"
        })
    })
    it("test product show", async ()=>{
        const results = await products.show(1)
        expect(results).toEqual({
            id: 1,
            name: "Test product",
            price: "$300.00"
        })
    })
})