import dfs from './matrix-dfs-ts'

const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

const result = [1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 9, 8, 3, 4, 5, 14, 13, 12, 7, 2];

it('Traverses a matrix using DFS', () => {
    expect(dfs(testMatrix)).toEqual(result);
})