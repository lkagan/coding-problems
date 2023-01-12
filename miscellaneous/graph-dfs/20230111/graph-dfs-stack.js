'use strict';

exports.graphDfs = (graph) => {
    const values = new Set();
    const stack = [0];

    while (stack.length) {
        const vertex = stack.pop();
        values.add(vertex);

        for (const connection of graph[vertex]) {
           if (!values.has(connection)) {
               stack.push(connection);
           }
        }
    }

    return values;
}