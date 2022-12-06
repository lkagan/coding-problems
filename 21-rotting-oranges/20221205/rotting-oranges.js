'use strict';

function orangesRotting(grid) {

    if (grid.length === 0 || grid[0].length === 0) return 0;

    const FRESH = 1, ROTTEN = 2;
    const DIRS = [[-1,0], [0,1], [1,0], [0,-1]];
    let freshCount = 0;
    const rottenQueue = [];
    let minutes = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === FRESH) {
                ++freshCount;
            } else if (grid[i][j] === ROTTEN) {
                rottenQueue.push([i,j]);
            }
        }
    }

    let currentNumRotten = rottenQueue.length;

    while (rottenQueue.length) {
        if (currentNumRotten === 0) {
            currentNumRotten = rottenQueue.length;
            minutes++;
        }

        const [row, col] = rottenQueue.shift();
        currentNumRotten--;

        for (const DIR of DIRS) {
            const newRow = row + DIR[0];
            const newCol = col + DIR[1];

            if (validCell(grid, newRow, newCol) && grid[newRow][newCol] === FRESH) {
                grid[newRow][newCol] = ROTTEN;
                --freshCount;
                rottenQueue.push([newRow, newCol]);
            }
        }
    }

    return freshCount > 0 ? -1 : minutes;
}

function validCell(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

module.exports = orangesRotting;