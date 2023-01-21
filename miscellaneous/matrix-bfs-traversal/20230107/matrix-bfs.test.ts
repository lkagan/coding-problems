import { test, expect} from "vitest";
import matrixBfs from './matrix-bfs-ts';

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const results = [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16];

test('matrixBfs(matrix)', () => {
    expect(matrixBfs(matrix)).toEqual(results);
});