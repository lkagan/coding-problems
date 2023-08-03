'use strict';

const dfs = require('./graph-dfs-rec');

const adjList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 2, 4, 5],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
];

const expected = [0, 1, 3, 2, 8, 4, 6, 7, 5];

describe('Traverses a graph using recursive DFS approach', () => {
    it('Checks dfs function', () => {
        expect(dfs(adjList, 0)).toEqual(expected);
    })
})