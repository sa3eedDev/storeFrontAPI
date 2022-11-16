import app from '../../server';
import supertest from 'supertest';

const request = supertest(app)
var token: string = 'null';
describe("Test order endpoints", ()=>{
    beforeAll((done)=>{
        request.post('/users')
        .send({firstname: "test", lastname: 'last', password: "LOLOL123"})
        .end((err, res)=>{
            token = res.body[1]
            done()
        })
    })
    describe("test show order endpoint", ()=>{

        it("test without JWT", (done)=>{
            request.get("/orders/1").expect(401, done)

        })

        it("Test show order with JWT", (done)=>{
            request.get("/orders/1")
            .set('Authorization', 'Bearer ' + token)
            .expect(200, done)
        })
    })

    describe("test create order endpoint", ()=>{
        it("test without sending a body", (done)=>{
            request.post('/orders').expect(500, done)
        })
        it("test creating an Order", (done)=>{
            request.post('/orders')
                .send({
                    products:[
                        {
                            product_id: 1,
                            quantity: 3
                        },
                        {
                            product_id: 1,
                            quantity: 5
                        }
                    ],
                    state_of_order: true,
                    user_id: 1
                    })
                .expect(200, done)
        })
    })


})