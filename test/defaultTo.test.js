import chai from 'chai';
const expect = chai.expect;
import defaultTo from '../src/defaultTo.js';

describe('DefaultTo', () => {
    describe('Basic functionality', () => {
        it('Acceptable number', () => {
            const result = defaultTo(1, 10)
            expect(result).to.be.a('Number');
            expect(result).to.equal(1);
        });
        it('Should return default value', () => {
            const result = defaultTo(undefined, 10)
            expect(result).to.be.a('Number');
            expect(result).to.equal(10);
        });
    });
});
