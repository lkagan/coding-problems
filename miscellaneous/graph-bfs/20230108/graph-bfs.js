'use strict';

module.exports = (graph) => {
    const values = [];
    const queue = [0];
    const seen = new Set(queue);

    while (queue.length) {
        const vertex = queue.shift();
        values.push(vertex);
        const connections = graph[vertex];

        for (const connection of connections) {
            if (!seen.has(connection)) {
                seen.add(connection);
                queue.push(connection);
            }
        }
    }

    return values;
}