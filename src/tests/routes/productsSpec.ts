import supertest from "supertest";
import app from "../../server";


const request = supertest(app);
var token: string = ''

describe("testing products endpoints", ()=>{
    beforeAll((done)=>{
        request.post('/users')
        .send({firstname: "test", lastname: 'last', password: "LOLOL123"})
        .end((err, res)=>{
            token = res.body[1]
            done()
        })
    })
    it("test products index", (done)=>{

        request.get('/products').expect(200,done)
    })

    it("test show product", (done)=>{
        request.get('/products/1').expect(200,done)
    })

    it("test create product", (done)=>{
        request.post('/products')
            .set('Authorization', 'Bearer ' + token)
            .send({name: "Test product", price: "300"})
            .expect(200, done)
    })

    
})