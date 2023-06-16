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