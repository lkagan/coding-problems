const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];


export default (matrix: Array<Array<number>>): Set<number> => {
    const values: Set<number> = new Set();
    const seen = new Set([matrix[0][0]]);
    const queue = [[0, 0]];

    while (queue.length) {
        const [row, col] = queue.shift() as Array<number>;
        values.add(matrix[row][col]);

        for (const [yOffset, xOffset] of dirs) {
            const newRow = row + yOffset;
            const newCol = col + xOffset;

            if (inBounds(newRow, newCol, matrix) && !seen.has(matrix[newRow][newCol])) {
                seen.add(matrix[newRow][newCol]);
                queue.push([newRow, newCol]);
            }
        }
    }

    return values;
}


function inBounds(row: number, col: number, matrix: Array<Array<number>>): boolean {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}