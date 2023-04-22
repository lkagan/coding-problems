'use strict';

const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

module.exports = (matrix) => {
    const values = [];
    const stack = [[0,0]];
    const seen = new Set([matrix[0][0]]);

    while (stack.length) {
        const [y, x] = stack.pop();
        values.push(matrix[y][x]);

        for(const [yOffset, xOffset] of DIRS) {
            const newY = y + yOffset;
            const newX = x + xOffset;

            if (inBounds(matrix, newX, newY) && !seen.has(matrix[newY][newX])) {
                seen.add(matrix[newY][newX]);
                stack.push([newY, newX]);
            }
        }
    }

    return values;
}

function inBounds(matrix, x, y) {
    return x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length;
}