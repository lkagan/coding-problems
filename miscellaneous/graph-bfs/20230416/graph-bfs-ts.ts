export default function bfs(adjList: Array<Array<number>>): Array<number> {
    const values: number[] = [];
    const queue = [0];
    const seen = new Set([0]);

    while (queue.length) {
        const current = queue.shift() as number;
        values.push(current);

        adjList[current].forEach(connection => {
            if (!seen.has(connection)) {
                seen.add(connection);
                queue.push(connection);
            }
        })
    }

    return values;
}