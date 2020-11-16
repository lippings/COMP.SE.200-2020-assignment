import { equal } from 'assert';

import add from '../src/add.js';

describe('Add', function() {
    describe('pos-pos', function() {
        it('Should add two positive numbers correctly', function() {
            equal(add(6, 4), 10);
        });
    });
});
