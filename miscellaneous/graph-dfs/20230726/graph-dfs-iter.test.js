const dfs = require('./graph-dfs-iter');

describe('dfs', () => {
    it('should return an array representation of graph in depth first order', () => {
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

        expect(dfs(adjList, 0)).toEqual(expected);
    });
});

