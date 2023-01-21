const moves = [[-1,0], [0,1], [1,0], [0,-1]];

export default (matrix: Array<Array<number>>): Array<number> => {
    const values: number[] = [];
    const queue = [[0,0]];
    const seen: {[key: string]: boolean} = {};
    seen[JSON.stringify([0,0])] = true;

    while (queue.length) {
        const [row, col] = queue.shift()!;
        values.push(matrix[row][col]);

        for (const [yOffset, xOffset] of moves) {
            const newRow = row + yOffset;
            const newCol = col + xOffset;

            if(!seen[JSON.stringify([newRow, newCol])] && inBounds(newRow, newCol, matrix)) {
                queue.push([newRow, newCol]);
                seen[JSON.stringify([newRow, newCol])] = true;
            }
        }
    }

    return values;
}

function inBounds(row: number, col: number, matrix: Array<Array<number>>): boolean {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length;
}