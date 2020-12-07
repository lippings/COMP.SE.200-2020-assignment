import chai from 'chai';
const expect = chai.expect;
import words from '../src/words.js';

describe('Words', () => {
    describe('Basic functionality', () => {
        const str1 = 'we are doing testing';
        const str2 = '1,2,3,4,5,6';
        const str3 = 'we   ArE777 D0inG. ,,, Test1ng88 ?? &&& DDD asdf343 * 55 = 1';
        const arr = [ 1, 2, 3 ];

        it('Parsing words from a basic sentence', () => {
            const result = words(str1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[2]).to.equal('doing');
        });
        it('Parsing numbers from a CSV string', () => {
            const result = words(str2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(6);
            expect(result[3]).to.equal('4');
        });
        it('Parsing words from a complex string', () => {
            const result = words(str3);

            expect(result).to.be.an('Array');
            expect(result).to.include('Test');
            expect(result).to.not.include('??');
        });
        it('Parsing string from a complex string with given pattern', () => {
            const result = words(str3, 'asdf343');

            expect(result).to.be.an('Array');
            expect(result[0]).to.equal('asdf343');
        });
    });

    describe('Errors', () => {
        const nbr = 1000;
        const bool = false;
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const func = ( a, b ) => { return a + b };
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };

        it('Zero arguments', () => {
            expect(() => words()).to.throw("Cannot read property 'match' of undefined");
        });
        it('Empty string', () => {
            const result = words('');
            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Array as a pattern', () => {
            const result = words(str, arr);
            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Array instead of string', () => {
            expect(() => words(arr)).to.throw("string.match is not a function");
        });
        it('Object instead of string', () => {
            expect(() => words(obj)).to.throw("string.match is not a function");
        });
        it('Number instead of string', () => {
            expect(() => words(nbr)).to.throw("string.match is not a function");
        });
        it('Boolean instead of string', () => {
            expect(() => words(bool)).to.throw("string.match is not a function");
        });
        it('Function instead of string', () => {
            expect(() => words(func)).to.throw("string.match is not a function");
        });
    });
});
