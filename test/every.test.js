import chai from 'chai';
const expect = chai.expect;
import every from '../src/every.js';

describe('Every', () => {
    describe('Simple arrays', () => {
        const str = 'test';
        const arr = [ 1, 2, 3 ];
        const func = ( a ) => { return (a < 3) };

        it('All elements pass the check', () => {
            const result = every(arr, Number);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('All elements do not pass the check', () => {
            const result = every(arr, func);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('String passing the check', () => {
            const result = every(str, String);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('String failing the check', () => {
            const result = every(str, func);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
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
            const result = every(compArr, func1);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('All elements do not pass the check', () => {
            const result = every(compArr, func2);

            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
    });

    describe('Errors', () => {
        const arr = [ 1, 2, 3 ];

        it('Zero arguments', () => {
            const result = every();
            expect(result).to.equal(true);
        });
        it('Empty array', () => {
            const result = every([], Boolean);
            expect(result).to.equal(true);
        });
        it('Predicate missing', () => {
            expect(() => every(arr)).to.throw('predicate is not a function');
        });
        it('Three arguments', () => {
            const result = every(arr, Number, Boolean);
            expect(result).to.equal(true);
        });
        it('Arguments in wrong order', () => {
            expect(() => every(Number, arr)).to.throw('predicate is not a function');
        });
    });
});
