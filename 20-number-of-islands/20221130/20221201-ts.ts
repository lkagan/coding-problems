const numIslands = (grid: string[][]): number => {
    let count = 0;

    const seen = Array(grid.length).fill(0)
        .map(() => Array(grid[0].length).fill(false));

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === "1") {
                count++;
                convertToWater(grid, i, j, seen);
            }
        }
    }

    return count;
}

function convertToWater(
    grid: string[][],
    row: number,
    col: number,
    seen: boolean[][]
): void {
    const queue: number[][] = [[row, col]];
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while (queue.length) {
        [row, col] = queue.shift()!;
        grid[row][col] = "0";

        dirs.forEach(dir => {
            const [newRow, newCol] = [row + dir[0], col + dir[1]];

            if (validCell(grid, newRow, newCol) && !seen[newRow][newCol]) {
                seen[newRow][newCol] = true;

                if (grid[newRow][newCol] === "1") {
                    queue.push([newRow, newCol]);
                }
            }
        });
    }
}

function validCell(
    grid: string[][],
    row: number,
    col: number,
): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

export default numIslands;