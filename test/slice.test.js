import chai from 'chai';
const expect = chai.expect;
import slice from '../src/slice.js';

describe('Slice', () => {
    describe('Basic functionality', () => {
        const arr = [ 1, 2, 3, 4 ];
        const str = 'testing';

        it('Slicing an array with positive integer as a starting point', () => {
            const result = slice(arr, 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[1]).to.equal(4);
        });
        it('Slicing an array with negative integer as a starting point', () => {
            const result = slice(arr, -3);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[1]).to.equal(3);
        });
        it('Slicing an array with zero as a starting point', () => {
            const result = slice(arr, 0);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(arr.length);
            expect(result[0]).to.equal(arr[0]);
        });
        it('Slicing a string with positive integer as start and end', () => {
            const result = slice(str, 2, 6);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[3]).to.equal('n');
        });
        it('Slicing a string with negative integer as start and end', () => {
            const result = slice(str, -3, -2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal('i');
        });
        it('Slicing a string with zero as start and positive integer as end', () => {
            const result = slice(str, 0, 5);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(5);
            expect(result[1]).to.equal('e');
        });
        it('Slicing a string with zero as start and negative integer as end', () => {
            const result = slice(str, 0, -1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(6);
            expect(result[2]).to.equal('s');
        });
        it('Slicing a string with zero as start and end', () => {
            const result = slice(str, 0, 0);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const arr = [ 1, 2, 3 ];
        const func = ( a, b ) => { return a + b };
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Empty array', () => {
            const result = slice([], 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Zero arguments', () => {
            const result = slice();
            
            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Array as starting point', () => {
            const result = slice(arr, arr);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('null as starting point', () => {
            const result = slice(arr, null);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(arr.length);
            expect(result[0]).to.equal(arr[0]);
        });
        it('Too big positive integer as starting point', () => {
            const result = slice(arr, 4);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Too big negative integer as starting point', () => {
            const result = slice(arr, -4);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(arr.length);
            expect(result[0]).to.equal(arr[0]);
        });
        it('Array as end point', () => {
            const result = slice(arr, 2, arr);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Slicing a number', () => {
            const result = slice(nbr, 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Slicing a boolean', () => {
            const result = slice(bool, 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Slicing an object', () => {
            const result = slice(obj, 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Slicing a function', () => {
            const result = slice(func, 2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
    });
});
