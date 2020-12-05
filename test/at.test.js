import chai from 'chai';
const expect = chai.expect;
import at from '../src/at.js';

describe('At', () => {
    describe('Simple object', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 }

        it('Should return one path correctly', () => {
            const result = at(obj, 'a');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(obj.a);
        });
        it('Should return two paths correctly', () => {
            const result = at(obj, ['b', 'c']);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[0]).to.equal(obj.b);
            expect(result[1]).to.equal(obj.c);
        });
        it('Should return three paths correctly', () => {
            const result = at(obj, ['a', 'c', 'd']);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[0]).to.equal(obj.a);
            expect(result[1]).to.equal(obj.c);
            expect(result[2]).to.equal(obj.d);
        });
        it('String as an object', () => {
            const result = at(str, 1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(str[1]);
        });
        it('Array as an object', () => {
            const result = at(arr, [1, 2]);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[0]).to.equal(arr[1]);
            expect(result[1]).to.equal(arr[2]);
        });
    });

    describe('Complex object', () => {
        const obj = { 
            'a': 'test',
            'b': [{ 'b0': { 'b00': 2 }}, { 'b1': true }],
            'c': undefined,
            'key': 4 }

        it('Should return one path correctly', () => {
            const result = at(obj, 'a');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.a('String');
            expect(result[0]).to.equal(obj.a);
        });
        it('Should return two paths correctly', () => {
            const result = at(obj, ['b[0].b0', 'c']);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[0]).to.be.an('Object');
            expect(result[0]).to.equal(obj.b[0].b0);
            expect(result[1]).to.be.an('undefined');
            expect(result[1]).to.equal(obj.c);
        });
        it('Should return three paths correctly', () => {
            const result = at(obj, ['b[1].b1', 'key', 'a']);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[0]).to.be.a('Boolean');
            expect(result[0]).to.equal(obj.b[1].b1);
            expect(result[1]).to.be.a('Number');
            expect(result[1]).to.equal(obj.key);
            expect(result[2]).to.be.a('String');
            expect(result[2]).to.equal(obj.a);
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
            'd': 4 }

        it('Path not defined', () => {
            const result = at(obj, 'e');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(obj.e);
        });
        it('Path not given', () => {
            const result = at(obj);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.an('undefined');
        });
        it('Zero arguments', () => {
            const result = at();

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.an('undefined');
        });
        it('Number instead of an object', () => {
            const result = at(nbr, '1');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.an('undefined');
        });
        it('Boolean instead of an object', () => {
            const result = at(bool, '1');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.an('undefined');
        });
        it('Function instead of an object', () => {
            const result = at(func(), '1');

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(1);
            expect(result[0]).to.be.an('undefined');
        });
    });
});
