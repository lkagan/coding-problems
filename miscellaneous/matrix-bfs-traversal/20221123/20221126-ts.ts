export default (matrix: number[][]): number[] => {
    const results: number[] = [];
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const seen = [...Array(matrix.length)].map(() => {
        return new Array(matrix[0].length).fill(false);
    });

    const queue = [[0, 0]];
    seen[0][0] = true;

    while (queue.length) {
        let [row, col] = queue.shift()!;
        results.push(matrix[row][col]);

        dirs.forEach(dir => {
            const nextRow = row + dir[0];
            const nextCol = col + dir[1];

            if (validCell(nextRow, nextCol, matrix, seen)) {
                seen[nextRow][nextCol] = true;
                queue.push([nextRow, nextCol]);
            }
        });
    }

    return results;
}

function validCell(
    row: number,
    col: number,
    matrix: number[][],
    seen: boolean[][]
): boolean {
    if (row < 0 || col < 0 || row >= matrix.length
        || col >= matrix[0].length || seen[row][col]) {
        return false;
    }

    return true;
}
