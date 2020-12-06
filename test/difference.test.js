import chai from 'chai';
const expect = chai.expect;
import difference from '../src/difference.js';

describe('Difference', () => {
    describe('Simple arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 4, 6];
        const arr3 = [3, 6, 9];
        const obj = {
            'a': 1,
            'b': 2
        };
        function arrLike() {
            this.push('test');
        };
        arrLike.prototype = [];
        const arrLikeObject = new arrLike();

        it('Same array twice', () => {
            const result = difference(arr1, arr1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
        });
        it('Two different arrays', () => {
            const result = difference(arr1, arr2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[1]).to.equal(3)
        });
        it('Three different arrays', () => {
            const result = difference(arr1, arr2, arr3);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(1)
        });
        it('Only one array', () => {
            const result = difference(arr1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[2]).to.equal(arr1[2]);
        });
    });

    describe('Complex arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [2, 4, 6];
        const arr3 = [3, 6, 9];
        const obj1 = {
            'a': 1,
            'b': 2,
            'c': 3
        };
        const obj2 = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 'test'
        };
        const compArr1 = [
            arr1,
            arr2,
            arr3
        ];
        const compArr2 = [
            obj1,
            arr1,
            arr3
        ];
        const compArr3 = [
            obj2,
            arr2,
            obj1
        ];

        it('Same array twice', () => {
            const result = difference(compArr1, compArr1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
        });
        it('Two different arrays', () => {
            const result = difference(compArr2, compArr3);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[1]).to.equal(arr3);
        });
        it('Three different arrays', () => {
            const result = difference(compArr3, compArr2, compArr1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(obj2);
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const str = 'test';
        const arr1 = [1, 2, 3];
        const func = ( a ) => { return a };

        it('Zero arguments', () => {
            const result = difference();

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
        });
        it('String instead of an array', () => {
            const result1 = difference(str, arr1);
            const result2 = difference(arr1, str);

            expect(result1).to.be.an('Array');
            expect(result2).to.be.an('Array');
            expect(result1.length).to.equal(0);
            expect(result2.length).to.equal(3);
            expect(result2[2]).to.equal(arr1[2]);
        });
        it('Number instead of an array', () => {
            const result1 = difference(nbr, arr1);
            const result2 = difference(arr1, nbr);

            expect(result1).to.be.an('Array');
            expect(result2).to.be.an('Array');
            expect(result1.length).to.equal(0);
            expect(result2.length).to.equal(3);
            expect(result2[2]).to.equal(arr1[2]);
        });
        it('Boolean instead of an array', () => {
            const result1 = difference(bool, arr1);
            const result2 = difference(arr1, bool);

            expect(result1).to.be.an('Array');
            expect(result2).to.be.an('Array');
            expect(result1.length).to.equal(0);
            expect(result2.length).to.equal(3);
            expect(result2[2]).to.equal(arr1[2]);
        });
        it('Function instead of an array', () => {
            const result1 = difference(func, arr1);
            const result2 = difference(arr1, func);

            expect(result1).to.be.an('Array');
            expect(result2).to.be.an('Array');
            expect(result1.length).to.equal(0);
            expect(result2.length).to.equal(3);
            expect(result2[2]).to.equal(arr1[2]);
        });
    });
});
