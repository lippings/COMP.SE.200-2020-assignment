import chai from 'chai';
const expect = chai.expect;
import upperFirst from '../src/upperFirst.js';

describe('UpperFirst', () => {
    describe('Basic functionality', () => {
        it('Lower case', () => {
            const result = upperFirst('fred')
            expect(result).to.be.a('String');
            expect(result).to.equal('Fred');
        });
        it('Upper case', () => {
            const result = upperFirst('FRED')
            expect(result).to.be.a('String');
            expect(result).to.equal('FRED');
        });
        it('Mixed', () => {
            const result = upperFirst('fREd')
            expect(result).to.be.a('String');
            expect(result).to.equal('FREd');
        });
        it('Empty string', () => {
            const result = upperFirst('')
            expect(result).to.be.a('String');
            expect(result).to.equal('');
        });
        it('Numbers', () => {
            const result = upperFirst('1234')
            expect(result).to.be.a('String');
            expect(result).to.equal('1234');
        });
        it('Array', () => {
            expect(() => upperFirst([1,2,3]).to.throw("chr[methodName] is not a function"));
        });
    });
});
