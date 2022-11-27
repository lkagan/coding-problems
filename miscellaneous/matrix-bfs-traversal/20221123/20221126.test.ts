import Matrix from './20221126-ts';
const matrixTest = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const matrix = new Matrix(matrixTest);

const results = [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16];

it('matrixBfs(matrix)', () => {
    expect(matrix.flatten()).toEqual(results);
})
