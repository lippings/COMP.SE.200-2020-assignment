import chai from 'chai';
const expect = chai.expect;
import toNumber from '../src/toNumber.js';

describe('ToNumber', () => {
    describe('Basic functionality', () => {
        it('Float to number', () => {
            const result = toNumber(3.2)
            expect(result).to.be.a('Number');
            expect(result).to.equal(3.2);
        });
        it('Long double to number', () => {
            const result = toNumber(Number.MIN_VALUE)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5e-324);
        });
        it('Large positive number to number', () => {
            const result = toNumber(Infinity)
            expect(result).to.be.a('Number');
            expect(result).to.equal(Infinity);
        });
        it('Number string to number', () => {
            const result = toNumber('3.2')
            expect(result).to.be.a('Number');
            expect(result).to.equal(3.2);
        });
        it('Hexadecimal string to number', () => {
            const result = toNumber(0xFF)
            expect(result).to.be.a('Number');
            expect(result).to.equal(255);
        });
        it('Boolean', () => {
            const result = toNumber(true)
            expect(result).to.be.a('Number');
            expect(result).to.equal(1);
        });
        it('Other string', () => {
            const result = toNumber('abc')
            expect(result).to.be.NaN;
        });
        it('Zero arguments', () => {
            const result = toNumber()
            expect(result).to.be.NaN;
        });
        it('Not a number', () => {
            const result = toNumber(NaN)
            expect(result).to.be.NaN;
        });
        it('Object', () => {
            const result = toNumber({'a': 1, 'b': 2})
            expect(result).to.be.NaN;
        });
        it('Array', () => {
            const result = toNumber([1, 2, 3])
            expect(result).to.be.NaN;
        });
        it('Array', () => {
            const result = toNumber((a) => { a + 2});
            expect(result).to.be.NaN;
        });
        it('Symbol', () => {
            const result = toNumber(Symbol('foo'))
            expect(result).to.be.NaN;
        });
    });
});
