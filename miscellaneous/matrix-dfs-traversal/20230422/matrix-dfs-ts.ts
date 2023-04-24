const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

export default (matrix: Array<Array<number>>): Array<number> => {
    const start = [0, 0];
    const values: number[] = [];
    const stack: number[][] = [start];
    const seen = new Set([matrix[0][0]]);

    while (stack.length) {
        const [y, x] = stack.pop() as Array<number>;
        values.push(matrix[y][x]);

        for (const [yOffset, xOffset] of DIRS) {
            const newY = y + yOffset;
            const newX = x + xOffset;

            if (inBounds(newY, newX, matrix) && !seen.has(matrix[newY][newX])) {
                seen.add(matrix[newY][newX]);
                stack.push([newY,newX]);
            }
        }
    }

    return values;
}

function inBounds(y: number, x: number, matrix: Array<Array<number>>) {
    return y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length;
}