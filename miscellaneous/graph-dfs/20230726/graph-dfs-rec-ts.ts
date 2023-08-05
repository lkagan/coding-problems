export default function dfs(
    adjList: number[][],
    current: number,
    seen?: Set<number>,
    values?: number[]
): number[] {
    values = values || [current];
    seen = seen || new Set([current]);

    for (const connection of adjList[current]) {
        if (!seen.has(connection)) {
            seen.add(connection);
            values.push(connection);
            dfs(adjList, connection, seen, values);
        }
    }
    return values;
}
