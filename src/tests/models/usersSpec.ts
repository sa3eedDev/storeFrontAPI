import { user, usersClass } from "../../models/users";

const users = new usersClass()

describe("testing if User models are defind", ()=>{
    it("Check create user is defined", ()=>{
        expect(users.create).toBeDefined();
    });
    it("Check index users is defined", ()=>{
        expect(users.index).toBeDefined();
    });
    it("Check show user is defined", ()=>{
        expect(users.show).toBeDefined();
    });
});

describe("testing models functions", ()=>{
    it("test index users", async ()=>{
        const results = await users.index()
        expect(results.length).toBeGreaterThanOrEqual(0)
    })

    it("check create user", async()=>{
        const test: user= {
            id: undefined,
            firstname: "test",
            lastname: "last",
            password: "Test101"
        }
        const results = await users.create(test);
        expect({firstname: results.firstname, lastname: results.lastname}).toEqual({firstname: test.firstname, lastname: test.lastname})
    })

    it("test show user",async () => {
        const results = await users.show(1)
        expect({
            id: results.id, 
            firstname: results.firstname,
            lastname: results.lastname
            }).toEqual({
                id: 1,
                firstname: "test",
                lastname: "last"
            })
    })

})