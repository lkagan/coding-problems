import dfs from './graph-dfs-rec-ts'

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

test('adjList', () => {
    expect(dfs(adjList, 0)).toEqual(expected);
});