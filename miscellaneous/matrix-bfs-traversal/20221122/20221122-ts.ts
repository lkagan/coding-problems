const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default (matrix: number[][]): number[] => {
    const results: number[] = [];

    const seen: boolean[][] = new Array(matrix.length).fill(0)
        .map(() => new Array(matrix[0].length).fill(false));

    dfs(matrix, results, seen, 0, 0);
    return results;
}

function dfs(
    matrix: number[][],
    results: number[],
    seen: boolean[][],
    row: number,
    col: number
) {
    if (row < 0 || col < 0 || row >= matrix.length
        || col >= matrix[0].length || seen[row][col]) {
        return;
    }

    seen[row][col] = true;
    results.push(matrix[row][col]);

    for (let i = 0; i < dirs.length; ++i) {
        dfs(matrix, results, seen, row + dirs[i][0], col + dirs[i][1]);
    }
}
