'use strict';

class TestCase {
    constructor(before, after) {
        this.before = before;
        this.after = after;
    }
}

const wallsAndGates = require('./walls-and-gates');

const testCases = [
   new TestCase([[-1]], [[-1]]),
   new TestCase([
        [Infinity,-1,0,Infinity],
        [Infinity,Infinity,Infinity,-1],
        [Infinity,-1,Infinity,-1],
        [0,-1,Infinity,Infinity]
    ], [
        [3,-1,0,1],
        [2,2,1,-1],
        [1,-1,2,-1],
        [0,-1,3,4]
    ])
];

testCases.forEach((testCase, index) => {
    it(`wallsAndGates(testCases[${index}])`, () => {
        expect(wallsAndGates(testCase.before)).toEqual(testCase.after);
    });
});