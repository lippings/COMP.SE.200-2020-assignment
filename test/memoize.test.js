import chai from 'chai';
const expect = chai.expect;
import memoize from '../src/memoize.js';

describe('Memoize', () => {
    describe('Basic functionality', () => {
        let object;
        let other;

        beforeEach( () => {
            object = { 'a': 1, 'b': 2 };
            other = { 'c': 3, 'd': 4 };
        });

        it('Memoizing a function', () => {
            const values = memoize(Object.values);
            const cached = values.cache;

            expect(values).to.be.a('Function');
            expect(typeof(values.cache)).to.equal('object');
        });
        it('Memoizing one outcome', () => {
            const values = memoize(Object.values);
            values(object);
            const cached = values.cache;
            const objectArray = cached.get(object);

            expect(values).to.be.a('Function');
            expect(typeof(values.cache)).to.equal('object');
            expect(objectArray).to.be.an('Array');
            expect(objectArray.length).to.equal(2);
            expect(objectArray[1]).to.equal(2);
        });
        it('Memoizing two outcomes', () => {
            const values = memoize(Object.values);
            values(object);
            values(other);
            const cached = values.cache;
            const objectArray = cached.get(object);
            const otherArray = cached.get(other);

            expect(values).to.be.a('Function');
            expect(typeof(values.cache)).to.equal('object');
            expect(objectArray).to.be.an('Array');
            expect(objectArray.length).to.equal(2);
            expect(objectArray[1]).to.equal(2);
            expect(otherArray).to.be.an('Array');
            expect(otherArray.length).to.equal(2);
            expect(otherArray[1]).to.equal(4);
        });
        it('Memoized outcome should stay the same', () => {
            const values = memoize(Object.values);
            values(object);
            const cached = values.cache;
            const objectArray = cached.get(object);

            expect(objectArray).to.be.an('Array');
            expect(objectArray.length).to.equal(2);
            expect(objectArray[0]).to.equal(1);

            object.a = 2;
            values(object);
            const objectArrayNew = cached.get(object);

            expect(objectArrayNew).to.be.an('Array');
            expect(objectArrayNew.length).to.equal(2);
            expect(objectArrayNew[0]).to.equal(1);
        });
        it('Modifying cache', () => {
            const values = memoize(Object.values);
            values(object);
            const cached = values.cache;
            const objectArray = cached.get(object);

            expect(objectArray).to.be.an('Array');
            expect(objectArray.length).to.equal(2);
            expect(objectArray[0]).to.equal(1);

            values.cache.set(object, ['a', 'b']);
            values(object);
            const objectArrayNew = cached.get(object);

            expect(objectArrayNew).to.be.an('Array');
            expect(objectArrayNew.length).to.equal(2);
            expect(objectArrayNew[0]).to.equal('a');
        });
        it('Clearing cache', () => {
            const values = memoize(Object.values);
            values(object);
            values(other);
            const cached = values.cache;
            const objectArray = cached.get(object);
            const otherArray = cached.get(other);

            expect(objectArray).to.be.an('Array');
            expect(objectArray.length).to.equal(2);
            expect(objectArray[1]).to.equal(2);
            expect(otherArray).to.be.an('Array');
            expect(otherArray.length).to.equal(2);
            expect(otherArray[1]).to.equal(4);

            values.cache.clear();
            const objectArrayNew = cached.get(object);
            const otherArrayNew = cached.get(other);

            expect(objectArrayNew).to.be.undefined;
            expect(otherArrayNew).to.be.undefined;
        });
        it('Replacing data structure used in caching', () => {
            memoize.Cache = Map;
            const first = memoize.Cache.name;
            expect(first).to.equal('Map');

            memoize.Cache = WeakMap;
            const second = memoize.Cache.name;
            expect(second).to.equal('WeakMap');

            memoize.Cache = Map;
            const firstNew = memoize.Cache.name;
            expect(firstNew).to.equal('Map');
        });
    });

    describe('Errors', () => {
        let object;

        it('Object instead of function', () => {
            expect(() => memoize(object)).to.throw('Expected a function');
        });
        it('Zero arguments', () => {
            expect(() => memoize()).to.throw('Expected a function');
        });
    });
});