'use strict';

function dfs(adjList, start, seen, values) {
    values = values || [start];
    seen = seen || new Set([start]);

    const connections = adjList[start];

    for (const current of connections) {
        if (!seen.has(current)) {
            seen.add(current);
            values.push(current);
            dfs(adjList, current, seen, values);
        }
    }

    return values;
}

module.exports = dfs;