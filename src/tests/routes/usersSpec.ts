import app from "../../server";
import supertest from "supertest";


const request = supertest(app)
var token: string = ''

describe("Testing users endpoints", ()=>{
    beforeAll((done)=>{
        request.post('/users')
        .send({firstname: "test", lastname: 'last', password: "LOLOL123"})
        .end((err, res)=>{
            token = res.body[1]
            done()
        })
    })
    it("test creating a user", (done)=>{
        request.post('/users')
            .send({firstname: "test", lastname: 'last', password: "LOLOL123"})
            .expect(200, done())
    })

    it("test users index", (done)=>{
        request.get('/users')
            .set('Authorization', 'Bearer ' + token)
            .expect(200, done())
    })

    it("test show user", (done)=>{
        request.get('/users/1')
            .set('Authorization', 'Bearer ' + token)
            .expect(200,done())
    })
})