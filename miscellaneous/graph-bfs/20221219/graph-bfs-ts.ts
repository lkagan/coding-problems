export default (graph: number[][]): Set<number> => {
    const values: Set<number> = new Set();
    const seen: Set<number> = new Set();
    const queue =  [0];

    while (queue.length) {
        const vertex: number = queue.shift()!;
        values.add(vertex);
        seen.add(vertex);

        const connections: Array<number> = graph[vertex];

        connections.forEach(connection => {
            if (!seen.has(connection)) {
                queue.push(connection);
            }
        })
    }

    return values;
}