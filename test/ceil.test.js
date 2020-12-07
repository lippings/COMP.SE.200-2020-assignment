import chai from 'chai';
const expect = chai.expect;
import ceil from '../src/ceil.js';

describe('Ceil', () => {
    describe('Basic functionality', () => {
        it('Round up', () => {
            const result = ceil(4.006)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5);
        });
        it('Negative number', () => {
            const result = ceil(-4.006)
            expect(result).to.be.a('Number');
            expect(result).to.equal(-4);
        });
        it('Precission of 2 decimals', () => {
            const result = ceil(6.004, 2)
            expect(result).to.be.a('Number');
            expect(result).to.equal(6.01);
        });
        it('Negative precission', () => {
            const result = ceil(6040, -2)
            expect(result).to.be.a('Number');
            expect(result).to.equal(6100);
        });
        it('Zero arguments', () => {
            const result = ceil()
            expect(result).to.be.NaN
        });
        it('String', () => {
            const result = ceil('123.3')
            expect(result).to.be.a('Number');
            expect(result).to.equal(124);
        });
        it('Array', () => {
            const result = ceil([1,2,2.2,4.1])
            expect(result).to.be.NaN
        });
        it('Object', () => {
            const result = ceil({'a': 1.2, 'b': -3.4})
            expect(result).to.be.NaN
        });
    });
});
