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
        expect(results).toEqual([])
    })
})