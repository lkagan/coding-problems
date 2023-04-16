'use strict';

module.exports = (adjList) => {
    const queue = [0];
    const values = [];
    const seen = new Set(queue);

    while (queue.length) {
        const current = queue.shift();
        values.push(current);

        for (const connection of adjList[current]) {
            if (!seen.has(connection)) {
                seen.add(connection);
                queue.push(connection);
            }
        }
    }

    return values;
}