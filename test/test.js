import { equal } from 'assert';

import add from '../src/add.js';
import camelCase from '../src/camelCase.js';

describe('Add', function() {
    describe('simple-add', function() {
        it('Should add two positive numbers correctly', function() {
          equal(add(6, 4), 10);
        });
        it('Should add two negative numbers correctly', function() {
          equal(add(-4, -12), -16);
        });
        it('Should add positive and negative correctly', function() {
          equal(add(-4, 2), -2);
          equal(add(-100, 200), 100);
        });
    });
});

describe('CamelCase', function() {
  it('Docstring test cases', function() {
    equal(camelCase('Foo Bar'), 'fooBar');
    equal(camelCase('--foo-bar--'), 'fooBar');
    equal(camelCase('__FOO_BAR__'), 'fooBar');
  });
});
