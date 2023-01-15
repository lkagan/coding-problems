'use strict';

exports.graphDfs = (graph) => {
    const values = new Set();
    const seen = new Set([0]);
    const stack = [0];

    while (stack.length) {
        const vertex = stack.pop();
        values.add(vertex);

        for (const connection of graph[vertex]) {
           if (!seen.has(connection)) {
               seen.add(connection);
               stack.push(connection);
           }
        }
    }

    return values;
}