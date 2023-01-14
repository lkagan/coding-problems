const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default (matrix: Array<Array<number>>, start: Array<number>): Array<number> => {
    const values = [] as Array<number>;
    const stack = [start];
    const seen = [...Array(matrix.length)]
        .map(() => Array(matrix[0].length).fill(false));
    seen[start[0]][start[1]] = true;

    while (stack.length) {
        const [row, col] = stack.shift()!;
        values.push(matrix[row][col]);

        for (const [yOffset, xOffset] of directions) {
            const newRow = row + yOffset;
            const newCol = col + xOffset;

            if (inBounds(newRow, newCol, matrix) && !seen[newRow][newCol]) {
                seen[newRow][newCol] = true;
                stack.push([newRow, newCol]);
            }
        }
    }

    return values;
}

function inBounds(row: number, col: number, matrix: Array<Array<number>>): boolean {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}