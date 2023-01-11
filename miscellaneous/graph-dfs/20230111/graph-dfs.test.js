'use strict';

const graphDfs = require('./graph-dfs');

const graph = [
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2],
];

const results = [0,1,2,3,4,5,6,7,8];

it('graphDfs(graph)', () => {
    expect([...graphDfs(graph)].sort((a,b) => a-b)).toEqual(results);
});