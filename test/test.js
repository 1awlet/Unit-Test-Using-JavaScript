//var assert = require('assert');
import assert from 'assert';
describe('Tests functions', ()=>{
    let word='Space unit';
    let wordSplit= word.split(' ');
    describe('Test length', ()=>{
        it('It should be equal to two', ()=>{
            assert.equal(wordSplit.length, 2);
        })
    })
})