import bfs from './graph-bfs-ts';

const adjList = [
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
];

const results = [0, 1, 3, 4, 5, 2, 6, 8, 7];

it('Traverses list using BFS', () => {
    expect(bfs(adjList)).toEqual(results);
})