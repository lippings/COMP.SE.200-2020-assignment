import chai from 'chai';
const expect = chai.expect;
import reduce from '../src/reduce.js';

describe('Reduce', () => {
    describe('Basic functionality', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const func = ( a, b ) => { return a + b }
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 }

        it('Iterating through an array', () => {
            const result = reduce(arr, func, 0);

            expect(result).to.be.a('Number');
            expect(result).to.equal(6);
        });
        it('Iterating through an object', () => {
            const result = reduce(obj, func, 0);

            expect(result).to.be.a('Number');
            expect(result).to.equal(10);
        });
        it('Iterating through a string', () => {
            const result = reduce(str, func, '');

            expect(result).to.be.a('String');
            expect(result.length).to.equal(str.length);
            expect(result).to.equal(str);
        });
        it('Non-empty accumulator', () => {
            const result = reduce(arr, func, 10);

            expect(result).to.be.a('Number');
            expect(result).to.equal(16);
        });
        it('Accumulator not given', () => {
            const result = reduce(str, func);

            expect(result).to.be.a('String');
            expect(result.length).to.equal(str.length);
            expect(result).to.equal(str);
        });
    });

    describe('Advanced functionality', () => {
        const str = 'we are doing testing';
        const func1 = ( a, b ) => { return a + (b === ' ' ? 1 : 0) }

        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 4 }
        const func2 = (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result }

        const bool = false;
        const arr = [ str, obj, bool ];
        const func3 = ( a, b ) => {
            a.push(typeof(b));
            return a }

        it('Iterating through a string', () => {
            const result = reduce(str, func1, 0);

            expect(result).to.be.a('Number');
            expect(result).to.equal(3);
        });
        it('Iterating through an object', () => {
            const result = reduce(obj, func2, {});

            expect(result).to.be.an('Object');
            expect(result.test[0]).to.equal('a');
            expect(result.undefined[0]).to.equal('c');
        });
        it('Iterating through an array', () => {
            const result = reduce(arr, func3, []);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[2]).to.equal('boolean');
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const str = 'test';
        const func = ( a, b ) => { return a + b }

        it('Iteratee not given', () => {
            expect(() => reduce(str)).to.throw('iteratee is not a function');
        });
        it('Zero arguments', () => {
            const result = reduce();
            expect(result).to.be.undefined;
        });
        it('Number instead of an object', () => {
            const result = reduce(nbr, func, 0);

            expect(result).to.be.a('Number');
            expect(result).to.equal(0);
        });
        it('Boolean instead of an object', () => {
            const result = reduce(bool, func, {});

            expect(result).to.be.a('Object');
            expect(Object.keys(result).length).to.equal(0);
        });
        it('Function instead of an object', () => {
            const result = reduce(func, func, []);

            expect(result).to.be.a('Array');
            expect(result.length).to.equal(0);
        });
    });
});
