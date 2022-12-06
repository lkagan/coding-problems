'use strict';

const rottingOranges = require('./rotting-oranges');

class TestCase {
    constructor(expected, grid) {
        this.expected = expected;
        this.grid = grid;
    }
}

const testCases = [
    new TestCase(4, [[2, 1, 1], [1, 1, 0], [0, 1, 1]]),
    new TestCase(-1, [[2, 1, 1], [0, 1, 1], [1, 0, 1]]),
    new TestCase(0, [[0, 2]])
];

testCases.forEach((testCase, index) => {
    it(`rottingOranges(testCases[${index}])`, () => {
        expect(rottingOranges(testCase.grid)).toEqual(testCase.expected)
    });
})
