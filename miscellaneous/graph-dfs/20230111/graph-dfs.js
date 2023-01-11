'use strict';

function graphDfs(graph) {
    const values = new Set()
    dfs(0, graph, values);
    return values;
}

function dfs(current, graph, values) {
    values.add(current);

    for (const neighbor of graph[current]) {
        !values.has(neighbor) && dfs(neighbor, graph, values);
    }
}

module.exports = graphDfs;