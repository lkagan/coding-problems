'use strict';

function graphDfs(graph) {
    const values = new Set()
    const seen = new Set([0]);
    dfs(0, graph, values, seen);
    return values;
}

function dfs(current, graph, values, seen) {
    values.add(current);

    for (const neighbor of graph[current]) {
        if (!seen.has(neighbor)) {
            seen.add(neighbor);
            dfs(neighbor, graph, values, seen);
        }
    }
}

module.exports = graphDfs;