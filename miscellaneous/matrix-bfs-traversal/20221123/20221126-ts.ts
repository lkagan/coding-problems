export default class Matrix {
    private seen;

    constructor(private matrix: number[][]) {
        this.seen = [...Array(matrix.length)].map(() => {
            return new Array(matrix[0].length).fill(false);
        });
    }

    public flatten(): number[] {
        const results: number[] = [];
        const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];


        const queue = [[0, 0]];
        this.seen[0][0] = true;

        while (queue.length) {
            let [row, col] = queue.shift()!;
            results.push(this.matrix[row][col]);

            dirs.forEach(dir => {
                const nextRow = row + dir[0];
                const nextCol = col + dir[1];

                if (this.validCell(nextRow, nextCol)) {
                    this.seen[nextRow][nextCol] = true;
                    queue.push([nextRow, nextCol]);
                }
            });
        }

        return results;
    }

    protected validCell(row: number, col: number): boolean {
        if (row < 0 || col < 0 || row >= this.matrix.length
            || col >= this.matrix[0].length || this.seen[row][col]) {
            return false;
        }

        return true;
    }
}
