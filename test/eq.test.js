import chai from 'chai';
const expect = chai.expect;
import eq from '../src/eq.js';

describe('Eq', () => {
    describe('Basic values', () => {
        const func = ( a, b ) => { return a + b };
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        const str1 = 'test';
        const str2 = 'test';
        const str3 = 'testing';
        const obj1 = {
            'a': 1,
            'b': 2,
            'c': 3
        };
        const obj2 = {
            'a': 1,
            'b': 2,
            'c': 3
        };

        it('Same object twice', () => {
            const result = eq(obj1, obj1);
            expect(result).to.equal(true);
        });
        it('Two different objects with same elements', () => {
            const result = eq(obj1, obj2);
            expect(result).to.equal(false);
        });
        it('Same array twice', () => {
            const result = eq(arr1, arr1);
            expect(result).to.equal(true);
        });
        it('Two different arrays with same elements', () => {
            const result = eq(arr1, arr2);
            expect(result).to.equal(false);
        });
        it('Same string twice', () => {
            const result = eq(str1, str1,);
            expect(result).to.equal(true);
        });
        it('Two different string with same text', () => {
            const result = eq(str1, str2);
            expect(result).to.equal(true);
        });
        it('Two different string with different text', () => {
            const result = eq(str1, str3);
            expect(result).to.equal(false);
        });
        it('Same values of two different objects', () => {
            const result = eq(obj1.b, obj2.b);
            expect(result).to.equal(true);
        });
        it('Only one argument', () => {
            const result = eq('a');
            expect(result).to.equal(false);
        });
        it('Function as an argument', () => {
            const result = eq(func, func);
            expect(result).to.equal(true);
        });
    });

    describe('Special values', () => {
        it('Not a number twice', () => {
            const result = eq(NaN, NaN);
            expect(result).to.equal(true);
        });
        it('Null twice', () => {
            const result = eq(null, null);
            expect(result).to.equal(true);
        });
        it('Undefined twice', () => {
            const result = eq(undefined, undefined);
            expect(result).to.equal(true);
        });
        it('Not a number and null', () => {
            const result = eq(NaN, null);
            expect(result).to.equal(false);
        });
        it('undefined and null', () => {
            const result = eq(undefined, null);
            expect(result).to.equal(true);
        });
    });

    describe('Errors', () => {
        it('Zero arguments', () => {
            const result = eq();
            expect(result).to.equal(true);
        });
        it('Three arguments', () => {
            const result = eq('a', 'a', 'a');
            expect(result).to.equal(true);
        });
    });
});
