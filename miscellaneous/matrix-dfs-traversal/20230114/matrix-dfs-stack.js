'use strict';

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

module.exports = (matrix, start) => {
    const values = [];
    const stack = [start];
    const seen = [...Array(matrix.length)].map(() => Array(matrix[0].length).fill(false));
    seen[start[0]][start[1]] = true;

    while (stack.length) {
        const [row, col] = stack.shift()
        values.push(matrix[row][col]);

        directions.forEach(([yOffset, xOffset]) => {
            const newRow = row + yOffset;
            const newCol = col + xOffset;

            if (inBounds(newRow, newCol, matrix) && !seen[newRow][newCol]) {
                stack.push([newRow, newCol]);
                seen[newRow][newCol] = true;
            }
        });
    }

    return values;
}

function inBounds(row, col, matrix) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}