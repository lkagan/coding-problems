'use strict';

const numOfMinutes = require('./time-inform-emps');

class TestCase {
    constructor(n, id, managers, informTime, solution) {
        this.n = n;
        this.id = id;
        this.managers = managers;
        this.informTime = informTime;
        this.solution = solution;
    }
}

const testCases = [
    new TestCase(
        15,
        0,
        [-1,0,0,1,1,2,2,3,3,4,4,5,5,6,6],
        [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
        3
    ),
    new TestCase(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0], 1),
    new TestCase(4, 0, [-1,0,0,1], [4,3,0,0], 7),
]

testCases.forEach(({n, id, managers, informTime, solution}, index) => {
    it(`testCase(testCases[${index}])`, () => {
        expect(numOfMinutes(n, id, managers, informTime)).toEqual(solution);
    });
})