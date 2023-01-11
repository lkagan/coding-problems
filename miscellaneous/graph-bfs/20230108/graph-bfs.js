'use strict';

module.exports = (graph) => {
    const values = new Set();
    const queue = [0];

    while (queue.length) {
        const vertex = queue.shift();
        values.add(vertex);
        const connections = graph[vertex];

        for (const connection of connections) {
            if (!values.has(connection)) {
                values.add(connection);
                queue.push(connection);
            }
        }
    }

    return [...values];
}