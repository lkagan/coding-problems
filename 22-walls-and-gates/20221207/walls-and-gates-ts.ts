const GATE = 0;
const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];

export function wallsAndGates(rooms: number[][]): number[][] {
    for (let i = 0; i < rooms.length; ++i) {
        for (let j = 0; j < rooms[0].length; ++j) {
            if (rooms[i][j] === GATE) {
                dfs(rooms, i, j, 0);
            }
        }
    }

    return rooms;
}

function dfs(grid: number[][], row: number, col: number, step: number) {
    if (!inBounds(grid, row, col) || step && step >= grid[row][col]) {
        return;
    }

    grid[row][col] = step;

    DIRECTIONS.forEach(DIR => {
        dfs(grid, row + DIR[0], col + DIR[1], step + 1);
    });
}

function inBounds(grid: number[][], row: number, col: number): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}