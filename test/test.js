//var assert = require('assert');
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';

const emplooyes = require("../emplooyes").emplooyes;
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


    it("Specific emplooye data shown in response should match the data in emplooye array", (done) => {
            const expectedResult= emplooyes.find((spell)=>spell.id== emplooyeId); 
            
            chai.request('http://localhost:3000')
              .get(`/emplooyes/${emplooyeId}`)
              .end((err, res) => {
                const responseData = JSON.parse(res.text); 
              assert.deepEqual(JSON.stringify(responseData), JSON.stringify(expectedResult));
               done();
          
              });
          });

    })

const addEmplooye= (id,name,job, company)=>{

    if( typeof id !== "number",  typeof name !== "string", typeof job !== "string",
        typeof company !== "string") {
        return null
        }
    return {
        id,
        name,
        job,
        company,
        
    }
}


describe("It should add a new emplooye", () => {
 
    const newEmplooye = addEmplooye(7, "Gele", "IT-Engineer",
              "noneofyourBusiness");

    it("it should contain the right properties ", ()=>{
        assert.property(newEmplooye, "name");
        assert.property(newEmplooye, "job");
        assert.property(newEmplooye, "company");
    })


    it("it should have correct length ", ()=>{

        assert.strictEqual(Object.keys(newEmplooye).length, 4);

    })

    it("The new emplooye added  should exist and match with the provided values", (done) => {
        chai.request(port)
          .post('/emplooyes/add')
          .send(newEmplooye)
          .end((err, res) => {
            assert.equal(res.status, 200);  
            assert.deepEqual(res.body, newEmplooye); 
            console.log(res.body);
            done();
          });
      });
      

})