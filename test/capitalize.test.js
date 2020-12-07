import chai from 'chai';
const expect = chai.expect;
import capitalize from '../src/capitalize.js';

describe('Capitalize', () => {
    describe('Basic functionality', () => {
        it('Lower case', () => {
            const result = capitalize('fred')
            expect(result).to.be.a('String');
            expect(result).to.equal('Fred');
        });
        it('Upper case', () => {
            const result = capitalize('FRED')
            expect(result).to.be.a('String');
            expect(result).to.equal('Fred');
        });
        it('Mixed', () => {
            const result = capitalize('fREd')
            expect(result).to.be.a('String');
            expect(result).to.equal('Fred');
        });
        it('Empty string', () => {
            const result = capitalize('')
            expect(result).to.be.a('String');
            expect(result).to.equal('');
        });
        it('Numbers', () => {
            const result = capitalize('1234')
            expect(result).to.be.a('String');
            expect(result).to.equal('1234');
        });
        it('Array', () => {
            const result = capitalize([1,2,3])
            expect(result).to.be.a('String');
            expect(result).to.equal('1,2,3');
        });
    });
});
