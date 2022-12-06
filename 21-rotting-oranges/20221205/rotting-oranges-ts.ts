export default (grid: number[][]): number => {
    const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
    const FRESH = 1, ROTTEN = 2;
    let freshCount = 0;
    let minutes = 0;
    const rottenQueue: number[][] = [];

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === ROTTEN) {
                rottenQueue.push([i,j]);
            } else if (grid[i][j] === FRESH) {
                freshCount++;
            }
        }
    }

    let rottenCount = rottenQueue.length;

    while(rottenQueue.length) {
        if (rottenCount === 0) {
            rottenCount = rottenQueue.length;
            minutes++;
        }

        const [row, col] = rottenQueue.shift()!;
        --rottenCount;

        DIRECTIONS.forEach(DIR => {
            const newRow = row + DIR[0];
            const newCol = col + DIR[1];

            if (inBounds(newRow, newCol, grid) && grid[newRow][newCol] === FRESH) {
                grid[newRow][newCol] = ROTTEN;
                --freshCount;
                rottenQueue.push([newRow, newCol]);
            }
        });
    }

    return freshCount > 0 ? -1 : minutes;
}

function inBounds(row: number, col: number, grid: number[][]): boolean {
    return row >=0 && row < grid.length && col >= 0 && col < grid[0].length;
}