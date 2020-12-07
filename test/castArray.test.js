import chai from 'chai';
const expect = chai.expect;
import castArray from '../src/castArray.js';

describe('CastArray', () => {
    describe('Basic functionality', () => {
        it('Casting integer', () => {
            const result = castArray(1);
            expect(result).to.be.an('Array');
            expect(result[0]).to.equal(1);
        });
        it('Casting object', () => {
            const result = castArray({ 'a': 1 });
            expect(result).to.be.an('Array');
            expect(result[0].a).to.equal(1);
        });
        it('Casting string', () => {
            const result = castArray('abc');
            expect(result).to.be.an('Array');
            expect(result[0]).to.equal('abc');
        });
        it('Casting null', () => {
            const result = castArray(null);
            expect(result).to.be.an('Array');
            expect(result[0]).to.equal(null);
        });
        it('Casting undefined', () => {
            const result = castArray(undefined);
            expect(result).to.be.an('Array');
            expect(result[0]).to.equal(undefined);
        });
        it('Casting array', () => {
            const array = [1, 2, 3]
            const result = castArray(array);
            expect(result).to.be.an('Array');
            expect(result).to.equal(array);
        });
        it('Zero arguments', () => {
            const result = castArray();
            expect(result).to.be.an('Array');
            expect(result[0]).to.equal(undefined);
        });
    });
});
