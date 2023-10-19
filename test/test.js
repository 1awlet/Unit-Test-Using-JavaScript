//var assert = require('assert');
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
describe('Tests functions', ()=>{
    let word='Space unit';
    let wordSplit= word.split(' ');
    describe('Test length', ()=>{
        it('It should be equal to two', ()=>{
            assert.equal(wordSplit.length, 2);
        })
    })
    //WIll pass
    describe('Test http request', ()=>{

        it('it should return 200', (done)=>{
        
            chai.request('http://localhost:3000')
            .get('/')
            .end((err,res)=>{
            
                assert.equal(res.status, 200);

                done();
            }
            
            )
        })
    })


    //this will fail
    describe('Test unavaibble request', ()=>{

        it('it should return 200', (done)=>{
        
            chai.request('http://localhost:3000')
            .get('/about')
            .end((err,res)=>{
            
                assert.equal(res.status, 200);

                done();
            }
            
            )
        })
    })
})

//users
describe("Does the does user exist?", ()=>{

    it("The users lists should exist", (done)=>{

        chai.request(port)
        .get('/emplooyes')
        .end((req,res)=>{   
            assert.equal(res.status, 200)
            done()
        })
    })
})

//test to check the default route message
describe("Check the output message", ()=>{

    it("The message shown should be correct", (done)=>{
        chai.request(port)
        .get('/')
        .end((req,res)=>{
     
        let data = JSON.parse(res.text);
        assert.equal(data.message, "Welcome to emplooyes dashboard");
            done();
        })
    })

})

describe("It should send back the right data for specific emplooye", ()=>{
    //The emplote we going to test
     const emplooyeId = 1003;
     it("The end point for specific emplooye should be reached", (done)=>{
 
         chai.request(port)
         .get(`/emplooyes/${emplooyeId}`)
         .end((req,res)=>{
             
             assert.equal(res.status, 200);
 
             done();
         })
     })


     it("The response should return as form of an object ", (done)=>{

        chai.request(port)
        .get(`/emplooyes/${emplooyeId}`)
        .end((req,res)=>{
            const resData = res.body; 
             assert.equal(typeof resData, "object")
           
            done();
        })
    })

    }) 