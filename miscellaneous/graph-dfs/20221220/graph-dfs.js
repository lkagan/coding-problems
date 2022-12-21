'use strict';

module.exports = (graph) => {
    const values = [];
    dfs(graph, values, 0)
    return values;
}

function dfs(graph, values, vertex) {
    values.push(vertex);

    graph[vertex].forEach(neighbor => {
        if (!values.includes(neighbor)) {
            dfs(graph, values, neighbor);
        }
    })
}