import chai from 'chai';
const expect = chai.expect;
import add from '../src/add.js';

describe('Add', () => {
    describe('simple-add', () => {
        it('Should add two positive numbers correctly', () => {
            const result = add(6, 4);
            expect(result).to.equal(10);
        });
        it('Should add two negative numbers correctly', () => {
            const result = add(-4, -12);
            expect(result).to.equal(-16);
        });
        it('Should add positive and negative correctly', () => {
            const positive = add(-4, 2);
            const negative = add(200, -100);
            expect(positive).to.equal(-2);
            expect(negative).to.equal(100);
        });
    });
});
