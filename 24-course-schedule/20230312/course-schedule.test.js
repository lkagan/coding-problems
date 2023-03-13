'use strict';

const canFinish = require('./course-schedule');

class TestData {
    constructor(numCourses, prereqs, result) {
        this.numCourses = numCourses;
        this.prereqs = prereqs;
        this.result = result;
    }
}

const testData = [
    new TestData(
        3,
        [[0,1], [0,2]],
        true
    ),
    new TestData(
        6,
        [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]],
        true
    ),
    new TestData(
        2,
        [[1, 0], [0, 1]],
        false
    ),
];

describe('Can finish courses', () => {
    testData.forEach(({numCourses, prereqs, result}) => {
        it(`canFinish([${prereqs}])`, () => {
            expect(canFinish(numCourses, prereqs)).toEqual(result);
        });
    });
});