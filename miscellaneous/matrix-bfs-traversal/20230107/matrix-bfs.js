'use strict';

const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function matrixBfs(matrix) {
    const values = [];
    const queue = [[0, 0]];
    const seen = [...Array(matrix.length)]
        .map(() => Array(matrix[0].length).fill(false));
    seen[0][0] = true;

    while (queue.length) {
        const [row, col] = queue.shift();
        values.push(matrix[row][col])

        for (const [moveY, moveX] of moves) {
            const newRow = row + moveY;
            const newCol = col + moveX;

            if (inBounds(newRow, newCol, matrix) && !seen[newRow][newCol]) {
                queue.push([newRow, newCol]);
                seen[newRow][newCol] = true;
            }
        }
    }

    return values;
}

function inBounds(row, col, matrix) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}

module.exports = { matrixBfs };