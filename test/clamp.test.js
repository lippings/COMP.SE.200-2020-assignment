import chai from 'chai';
const expect = chai.expect;
import clamp from '../src/clamp.js';

describe('Clamp', () => {
    describe('Basic functionality', () => {
        it('Clamping negative number', () => {
            const result = clamp(-10, -5, 5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(-5);
        });
        it('Clamping positive number', () => {
            const result = clamp(10, -5, 5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5);
        });
        it('Lower bounder', () => {
            const result = clamp(-5, -5, 5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(-5);
        });
        it('Upper bounder', () => {
            const result = clamp(5, -5, 5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5);
        });
        it('Upper bound first', () => {
            const result = clamp(10, 5, -5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5);
        });
        it('Similar bounds', () => {
            const result = clamp(10, 5, 5)
            expect(result).to.be.a('Number');
            expect(result).to.equal(5);
        });
    });
});
