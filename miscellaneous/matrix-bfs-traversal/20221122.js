'use strict';

module.exports = matrix => {
    const seen = new Array(matrix.length).fill(0)
        .map(row => new Array(matrix[0].length).fill(false));
    const results = [];

    dfs(matrix, seen, results, 0, 0);

    return results;
}

function dfs(matrix, seen, results, row, col) {
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length
        || seen[row][col]) {
        return;
    }

    results.push(matrix[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < dirs.length; ++i) {
        dfs(matrix, seen, results, row + dirs[i][0], col + dirs[i][1]);
    }
}
