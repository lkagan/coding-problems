exports.numIslands = function (grid) {
    let count = 0;

    const seen = [...Array(grid.length)]
        .map(() => [...Array(grid[0].length)]).fill(false);

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
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (queue.length) {
        [row, col] = queue.shift();
        grid[row][col] = "0";

        dirs.forEach(dir => {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1]
            if (nextRow >= 0 && nextCol >= 0 && nextRow < grid.length
                && nextCol < grid[0].length && !seen[nextRow][nextCol]
                && grid[nextRow][nextCol] === "1") {
                queue.push([nextRow, nextCol]);
            }
        })
    }
}