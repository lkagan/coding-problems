'use strict';

const { graphDfs } = require('./graph-dfs-stack');

const graph = [
    [1,3],
    [0],
    [3,8],
    [0,2,4,5],
    [3,6],
    [3],
    [4,7],
    [6],
    [2],
];

const results = [0,3,5,4,6,7,2,8,1];

it('graphDfs(graph)', () => {
    expect([...graphDfs(graph)]).toEqual(results);
});