import chai from 'chai';
const expect = chai.expect;
import get from '../src/get.js';

describe('Get', () => {
    describe('Simple object', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Should return one value correctly', () => {
            const result = get(obj, 'd');

            expect(result).to.be.a('Number');
            expect(result).to.equal(4);
        });
        it('Should not return anything', () => {
            const result = get(obj, 'e');

            expect(result).to.be.undefined;
        });
        it('Should return default value', () => {
            const result = get(obj, 'e', 'test');

            expect(result).to.be.a('String');
            expect(result).to.equal('test');
        });
        it('String as an object', () => {
            const result = get(str, 1);

            expect(result).to.be.a('String');
            expect(result).to.equal('e');
        });
        it('Array as an object', () => {
            const result = get(arr, 0);

            expect(result).to.be.a('Number');
            expect(result).to.equal(1);
        });
    });

    describe('Complex object', () => {
        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 4 
        };

        it('Should return one simple value correctly', () => {
            const result = get(obj, 'a');

            expect(result).to.be.a('String');
            expect(result).to.equal('test');
        });
        it('Should return one complex value correctly', () => {
            const result = get(obj, 'b');

            expect(result).to.be.an('Array');
            expect(result).to.equal(obj.b);
        });
        it('Path with dot notation', () => {
            const result = get(obj, 'b[0].b0.b00');

            expect(result).to.be.a('Number');
            expect(result).to.equal(2);
        });
        it('Path with array of strings', () => {
            const result = get(obj, ['b', '1', 'b1']);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
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

        it('Path not given', () => {
            const result = get(obj);
            expect(result).to.be.undefined;
        });
        it('Path not given with default value', () => {
            const result = get(obj, [], 'test');
            expect(result).to.be.a('String');
            expect(result).to.equal('test');
        });
        it('Zero arguments', () => {
            const result = get();
            expect(result).to.be.undefined;
        });
        it('Number instead of an object', () => {
            const result = get(nbr, '');
            expect(result).to.be.undefined;
        });
        it('Number with default value', () => {
            const result = get(nbr, '', 'test');
            expect(result).to.be.a('String');
            expect(result).to.equal('test');
        });
        it('Boolean instead of an object', () => {
            const result = get(bool, '');
            expect(result).to.be.undefined;
        });
        it('Function instead of an object', () => {
            const result = get(func(), '');
            expect(result).to.be.undefined;
        });
    });
});
