import chai from 'chai';
const expect = chai.expect;
import countBy from '../src/countBy.js';

describe('CountBy', () => {
    describe('Simple object', () => {
        const str = 'test';
        const arr = [ 1, 1, 1 ];
        const func = ( a ) => { return a }
        const obj = { 
            'a': true,
            'b': true,
            'c': false,
            'd': false 
        }
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]

        it('Iterating through an array', () => {
            const result = countBy(arr, func);

            expect(result).to.be.a('Object');
            expect(result[1]).to.equal(3);
        });
        it('Iterating through a string', () => {
            const result = countBy(str, func);

            expect(result).to.be.a('Object');
            expect(result.t).to.equal(2);
        });
        it('Iterating through an object', () => {
            const result = countBy(obj, func);

            expect(result).to.be.a('Object');
            expect(result.false).to.equal(2);
        });
    });

    describe('Complex object', () => {
        const str = 'we are doing testing';
        const func = ( a ) => { return a }
        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 'test'
        }
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]

        it('Iterating through an array', () => {
            const result = countBy(users, value => value.active);

            expect(result).to.be.a('Object');
            expect(result.true).to.equal(2);
        });
        it('Iterating through a string', () => {
            const result = countBy(str, func);

            expect(result).to.be.a('Object');
            expect(result.e).to.equal(3);
            expect(result.g).to.equal(2);
        });
        it('Iterating through an object', () => {
            const result = countBy(obj, func);

            expect(result).to.be.a('Object');
            expect(result.test).to.equal(2);
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const str = 'test';
        const func = ( a ) => { return a }
        const funcErr = ( a ) => { return b }

        it('Iteratee not given', () => {
            expect(() => countBy(str)).to.throw('iteratee is not a function');
        });
        it('Zero arguments', () => {
            const result = countBy();

            expect(result).to.be.a('Object');
            expect(Object.keys(result).length).to.equal(0);
        });
        it('Number instead of an object', () => {
            const result = countBy(nbr, func);

            expect(result).to.be.a('Object');
            expect(Object.keys(result).length).to.equal(0);
        });
        it('Boolean instead of an object', () => {
            const result = countBy(bool, func);

            expect(result).to.be.a('Object');
            expect(Object.keys(result).length).to.equal(0);
        });
        it('Function instead of an object', () => {
            const result = countBy(func, func);

            expect(result).to.be.a('Object');
            expect(Object.keys(result).length).to.equal(0);
        });
        it('Faulty function', () => {
            expect(() => countBy(str, funcErr)).to.throw('b is not defined');
        });
    });
});
