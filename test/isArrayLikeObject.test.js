import chai from 'chai';
const expect = chai.expect;
import isArrayLikeObject from '../src/isArrayLikeObject.js';

describe('IsArrayLikeObject', () => {
    describe('Basic functionality', () => {
        const arr = [1, 2, 3];
        const obj = {
            'a': 1,
            'b': 2
        };
        function arrLike() {
            this.push('test');
        };
        arrLike.prototype = [];
        const arrLikeObject = new arrLike();

        it('Testing a normal array', () => {
            const result = isArrayLikeObject(arr);
            expect(result).to.equal(true);
        });
        it('Testing an array-like object', () => {
            const result = isArrayLikeObject(arrLikeObject);
            expect(result).to.equal(true);
        });
        it('Testing a normal object', () => {
            const result = isArrayLikeObject(obj);
            expect(result).to.equal(false);
        });
        it('Testing a string', () => {
            const result = isArrayLikeObject('abc');
            expect(result).to.equal(false);
        });
        it('Testing a function', () => {
            const result = isArrayLikeObject(Function);
            expect(result).to.equal(false);
        });
    });
});
