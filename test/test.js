import chai from 'chai';
var assert = chai.assert;

import add from '../src/add.js';
import camelCase from '../src/camelCase.js';
import slice from '../src/slice.js';

describe('Add', function() {
    describe('simple-add', function() {
        it('Should add two positive numbers correctly', function() {
          assert.equal(add(6, 4), 10);
        });
        it('Should add two negative numbers correctly', function() {
          assert.equal(add(-4, -12), -16);
        });
        it('Should add positive and negative correctly', function() {
          assert.equal(add(-4, 2), -2);
          assert.equal(add(-100, 200), 100);
        });
    });
});

describe('CamelCase', function() {
  it('Docstring test cases', function() {
    assert.equal(camelCase('Foo Bar'), 'fooBar', 'Space');
    assert.equal(camelCase('--foo-bar--'), 'fooBar', 'Hyphen');
    assert.equal(camelCase('__FOO_BAR__'), 'fooBar', 'Underscore');
  });
});

describe('slice', function() {
  it('Docstring case', function() {
    assert.deepEqual(slice([1, 2, 3, 4], 2), [3, 4]);
  });
});
