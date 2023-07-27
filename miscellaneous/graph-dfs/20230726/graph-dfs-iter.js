'use strict';

function dfs(adjList, start) {
    const stack = [start];
    const values = [];
    const seen = new Set(stack);

    while (stack.length) {
        const current = stack.pop();
        values.push(current);

        for (const connection of adjList[current]) {
            if (!seen.has(connection)) {
                seen.add(connection);
                stack.push(connection);
            }
        }
    }

    return values;
}

module.exports = dfs;