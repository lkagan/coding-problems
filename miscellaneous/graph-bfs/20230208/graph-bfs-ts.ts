export default (graph: Array<Array<number>>): Array<number> => {
    const values: Set<number> = new Set();
    const queue = [0];

    while (queue.length) {
        const value = queue.shift() as number;
        values.add(value);
        const connections = graph[value];

        connections.forEach(connection => {
            !values.has(connection) && queue.push(connection);
        });
    }

    return Array.from(values);
}