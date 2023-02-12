'use strict';

module.exports = (graph) => {
    const queue = [0];
    const visited = new Set(queue);

    while (queue.length) {
        const vertex = queue.shift();

        graph[vertex].forEach(connection => {
            if (!visited.has(connection)) {
                visited.add(connection);
                queue.push(connection);
            }
        });
    }

    return [...visited];
}