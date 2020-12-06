import chai from 'chai';
const expect = chai.expect;
import keys from '../src/keys.js';

describe('Keys', () => {
    describe('Simple object', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const emptyObj = {};
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Should return all keys correctly', () => {
            const result = keys(obj);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[2]).to.equal('c');
        });
        it('Should return empty array', () => {
            const result = keys(emptyObj);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('String as an object', () => {
            const result = keys(str);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[3]).to.equal('3');
        });
        it('Array as an object', () => {
            const result = keys(arr);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[1]).to.equal('1');
        });
    });

    describe('Complex object', () => {
        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 4 
        };

        it('Should return all parent keys', () => {
            const result = keys(obj);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[3]).to.equal('key');
        });
        it('Should return all children keys', () => {
            const result = keys(obj.b);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[1]).to.equal('1');
        });
        it('Should return one children keys', () => {
            const result = keys(obj.b[1]);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal('b1');
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        function func() { 1 + 1 };
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Zero arguments', () => {
            const result = keys();

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Number instead of an object', () => {
            const result = keys(nbr);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Boolean instead of an object', () => {
            const result = keys(bool);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Function instead of an object', () => {
            const result = keys(func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
    });
});
