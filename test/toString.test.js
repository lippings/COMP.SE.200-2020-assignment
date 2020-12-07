import chai from 'chai';
const expect = chai.expect;
import toString from '../src/toString.js';

describe('ToString', () => {
    describe('Basic functionality', () => {
        it('Null to string', () => {
            const result = toString(null)
            expect(result).to.equal('null');
        });
        it('Number to string', () => {
            const result = toString(-0)
            expect(result).to.be.a('String');
            expect(result).to.equal('-0');
        });
        it('Array to string', () => {
            const result = toString([1, 2, 3])
            expect(result).to.be.a('String');
            expect(result).to.equal('1,2,3');
        });
        it('Two arrays to string', () => {
            const result = toString([[1,2,3], [2,4,6]])
            expect(result).to.be.a('String');
            expect(result).to.equal('1,2,3,2,4,6');
        });
        it('Array and string', () => {
            const result = toString([[1,2,3], 'test'])
            expect(result).to.be.a('String');
            expect(result).to.equal('1,2,3,test');
        });
        it('Symbol to string', () => {
            const result = toString(Symbol('foo'))
            expect(result).to.be.a('String');
            expect(result).to.equal('Symbol(foo)');
        });
    });
});
