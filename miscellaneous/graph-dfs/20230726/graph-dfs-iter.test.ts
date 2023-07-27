import dfs from './graph-dfs-iter-ts';

describe('dfs', () => {
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

    const expected = [0, 3, 5, 4, 6, 7, 2, 8, 1];

    it('Traverses an adjacency list in DFS order', () => {
        expect(dfs(adjList, 0)).toEqual(expected);
    })
})