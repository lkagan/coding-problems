'use strict';

const matrixDfs = require('./matrix-dfs');

const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

const result = [1,2,6,3,7,11,4,8,12,16,5,9,13,17,10,14,18,15,19,20];

it('matrixDfs(testMatrix)', () => {
    expect(matrixDfs(testMatrix, [0,0])).toEqual(result);
})