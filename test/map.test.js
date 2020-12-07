import chai from 'chai';
const expect = chai.expect;
import map from '../src/map.js';

describe('Map', () => {
    describe('Basic functionality', () => {
        const arr = [ 1, 2, 3 ];
        const func1 = ( a, b ) => { return a + b };

        const str = 'test';
        const func2 = ( a ) => { return a.toUpperCase() };

        it('Mapping values of an array with simple function', () => {
            const result = map(arr, func1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(arr.length);
            expect(result[1]).to.equal(3);
        });
        it('Mapping values of a string with simple function', () => {
            const result = map(str, func2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(str.length);
            expect(result[3]).to.equal('T');
        });
    });

    describe('Advanced functionality', () => {
        const str = 'we are doing testing';
        const func1 = ( a, b ) => { return (b === 0 ? a.toUpperCase() : a) };

        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 4 
        };
        const bool = false;
        const arr = [ str, obj, bool ];
        const func2 = ( a ) => { return (typeof(a)) };

        it('Mapping values of a string with complex function', () => {
            const result = map(str, func1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(str.length);
            expect(result[0]).to.equal('W');
        });
        it('Mapping values of a complex array', () => {
            const result = map(arr, func2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[1]).to.equal('object');
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const func = ( a, b ) => { return a + b };
        const funcErr = ( a, b ) => { return a + c };
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Empty array', () => {
            const result = map([], func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Iteratee not given', () => {
            expect(() => map(str)).to.throw('iteratee is not a function');
        });
        it('Zero arguments', () => {
            const result = map();
            
            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Too many arguments', () => {
            const result = map(arr, func, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(arr.length);
            expect(result[1]).to.equal(3);
        });
        it('Object instead of an array', () => {
            const result = map(obj, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.undefined;
        });
        it('Number instead of an array', () => {
            const result = map(obj, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.undefined;
        });
        it('Function instead of an array', () => {
            const result = map(obj, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.undefined;
        });
        it('Faulty function', () => {
            expect(() => map(str, funcErr)).to.throw('c is not defined');
        });
    });
});
