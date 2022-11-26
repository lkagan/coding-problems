'use strict';

module.exports = matrix => {
    const results = [];
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const seen = new Array(matrix.length).fill(0).map(() => {
        return new Array(matrix[0].length).fill(false);
    });

    const queue = [[0, 0]];
    seen[0][0] = true;

    while (queue.length) {
        const current = queue.shift();
        results.push(matrix[current[0]][current[1]]);

        // Add each surrounding element to the queue and 'seen'
        directions.forEach(dir => {
            const row = current[0] + dir[0];
            const col = current[1] + dir[1];

            if (row < 0 || col < 0 || row >= matrix.length
                || col >= matrix[0].length || seen[row][col]) {
                return;
            }

            queue.push([row, col]);
            seen[row][col] = true;
        })
    }

    return results;
}
