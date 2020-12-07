import chai from 'chai';
const expect = chai.expect;
import toInteger from '../src/toInteger.js';

describe('ToInteger', () => {
    describe('Basic functionality', () => {
        it('Float to integer', () => {
            const result = toInteger(3.2)
            expect(result).to.be.a('Number');
            expect(result).to.equal(3);
        });
        it('Long double to integer', () => {
            const result = toInteger(Number.MIN_VALUE)
            expect(result).to.be.a('Number');
            expect(result).to.equal(0);
        });
        it('Large positive number to integer', () => {
            const result = toInteger(Infinity)
            expect(result).to.be.a('Number');
            expect(result).to.equal(1.7976931348623157e+308);
        });
        it('String to integer', () => {
            const result = toInteger('3.2')
            expect(result).to.be.a('Number');
            expect(result).to.equal(3);
        });
    });
});
