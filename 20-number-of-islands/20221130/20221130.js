'use strict'

exports.numIslands = function (grid) {
    let count = 0;

    const seen = [...Array(grid.length)]
        .map(() => Array(grid[0].length).fill(false));

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] === "1") {
                ++count;
                convertToWater(grid, i, j, seen);
            }
        }
    }

    return count;
}

function convertToWater(grid, row, col, seen) {
    const queue = [[row, col]];
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    while (queue.length) {
        [row, col] = queue.shift();
        grid[row][col] = "0";

        dirs.forEach(dir => {
            const [nextRow, nextCol] = [row + dir[0], col + dir[1]];

            if (validCell(grid, nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;

                if (grid[nextRow][nextCol] == "1") {
                    queue.push([nextRow, nextCol]);
                }
            }
        });
    }
}

function validCell(grid, row, col) {
    return row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
}