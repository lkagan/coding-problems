export default (graph: Array<Array<number>>): Array<number> => {
    const values: number[] = [];
    const queue: number[] = [0];
    const seen: Set<number> = new Set(queue);

    while (queue.length) {
        const vertex = queue.shift();
        if (vertex === undefined) return values;
        values.push(vertex);
        const connections = graph[vertex];

        for (const connection of connections) {
            if (! seen.has(connection)) {
                queue.push(connection);
                seen.add(connection);
            }
        }
    }

    return values;
}