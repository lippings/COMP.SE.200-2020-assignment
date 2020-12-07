import chai from 'chai';
const expect = chai.expect;
import endsWith from '../src/endsWith.js';

describe('EndsWith', () => {
    describe('Basic functionality', () => {
        it('Expect to find character', () => {
            const result = endsWith('abc', 'c')
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('Expect not to find character', () => {
            const result = endsWith('abc', 'b')
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Expect to find character with position', () => {
            const result = endsWith('abc', 'b', 2)
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('Expect not to find character with position', () => {
            const result = endsWith('asdf', 'b', 2)
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Negative position', () => {
            const result = endsWith('asdf', 'b', -2)
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Position out of length', () => {
            const result = endsWith('asdf', 'b', 10)
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Empty string', () => {
            const result = endsWith('', 'c')
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Array', () => {
            const result = endsWith([1,2,3], 'c')
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
    });
});
