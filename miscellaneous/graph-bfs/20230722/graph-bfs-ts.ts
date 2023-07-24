export default (adjList: number[][], start: number): number[] => {
    const values: number[] = [];
    const queue = [start];
    const seen: Set<number> = new Set(queue);

    while (queue.length) {
        const current = <number> queue.shift();
        const connections = adjList[current];
        values.push(current);

        for (const connection of connections) {
            if (!seen.has(connection)) {
                seen.add(connection);
                queue.push(connection);
            }
        }
    }

    return values;
}