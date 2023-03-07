'use strict';

const dirs = [[-1,0], [0,1], [1,0], [0,-1]];

module.exports = (matrix) => {
    const values = new Set();
    const seen = new Set();
    seen.add(matrix[0][0]);
    const queue = [[0,0]];

    while (queue.length) {
        const [row, col] = queue.shift();
        values.add(matrix[row][col]);

        for (const [rowOffset, colOffset] of dirs) {
            const newRow = row + rowOffset;
            const newCol = col + colOffset;

            if (inBounds(newRow, newCol, matrix) && !seen.has(matrix[newRow][newCol])) {
                queue.push([newRow, newCol]);
                seen.add(matrix[newRow][newCol]);
            }
        }
    }

    return values;
}

function inBounds(row, col, matrix) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}