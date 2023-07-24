import bfsTraversal from './graph-bfs-ts';

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

const expected = [0, 1, 3, 2, 4, 5, 8, 6, 7];

test('bfsTraversal', () => {
    expect(bfsTraversal(adjList, 0)).toEqual(expected);
});