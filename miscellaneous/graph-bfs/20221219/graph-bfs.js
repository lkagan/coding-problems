'use strict';

module.exports = function(graph) {
    const queue = [0];
    const values = new Set();
    const seen = new Set();

    while (queue.length) {
        const vertex = queue.shift();
        values.add(vertex);
        seen.add(vertex);
        const connections = graph[vertex];

        connections.forEach(connection => {
            if (!seen.has(connection)) {
                queue.push(connection);
            }
        });
    }

    return values;
}