import chai from 'chai';
const expect = chai.expect;
import isDate from '../src/isDate.js';

describe('IsDate', () => {
    describe('Basic functionality', () => {
        it('Date object', () => {
            const result = isDate(new Date)
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(true);
        });
        it('Basic object', () => {
            const result = isDate({'a': 1, 'b': 2})
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('String', () => {
            const result = isDate('Mon April 23 2012')
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
        it('Zero arguments', () => {
            const result = isDate()
            expect(result).to.be.a('Boolean');
            expect(result).to.equal(false);
        });
    });
});
