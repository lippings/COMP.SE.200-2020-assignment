import chai from 'chai';
const expect = chai.expect;
import filter from '../src/filter.js';

describe('Filter', () => {
    describe('Simple arrays', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const func = ( a ) => { return (a < 3) };

        it('All elements pass the check', () => {
            const result = filter(arr, Number);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[1]).to.equal(2);
        });
        it('All elements do not pass the check', () => {
            const result = filter(arr, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(2);
            expect(result[0]).to.equal(1);
        });
        it('String passing the check', () => {
            const result = filter(str, String);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[3]).to.equal('t');
        });
        it('String failing the check', () => {
            const result = filter(str, func);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
    });

    describe('Complex arrays', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const bool = false;
        const obj = { 
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4 
        };
        const compArr = [ str, arr, bool, obj ];
        const func1 = ( a ) => { return (typeof(a) !== 'number') };
        const func2 = ( value, index, array ) => {
            return (value !== array[3] && index < 3);
        };

        it('All elements pass the check', () => {
            const result = filter(compArr, func1);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(4);
            expect(result[3]).to.equal(obj);
        });
        it('All elements do not pass the check', () => {
            const result = filter(compArr, func2);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[2]).to.equal(bool);
        });
    });

    describe('Errors', () => {
        const arr = [ 1, 2, 3 ];

        it('Zero arguments', () => {
            const result = filter();

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Empty array', () => {
            const result = filter([], Boolean);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(0);
            expect(result[0]).to.be.undefined;
        });
        it('Predicate missing', () => {
            expect(() => filter(arr)).to.throw('predicate is not a function');
        });
        it('Three arguments', () => {
            const result = filter(arr, Number, Boolean);

            expect(result).to.be.an('Array');
            expect(result.length).to.equal(3);
            expect(result[1]).to.be.equal(2);
        });
        it('Arguments in wrong order', () => {
            expect(() => filter(Number, arr)).to.throw('predicate is not a function');
        });
    });
});
