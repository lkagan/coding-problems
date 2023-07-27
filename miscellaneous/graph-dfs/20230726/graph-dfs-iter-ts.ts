export default (adjList: number[][], start: number): number[] => {
    const values: number[] = [];
    const stack: number[] = [start];
    const seen: Set<number> = new Set([start]);

    while (stack.length) {
        const current = <number> stack.pop();
        values.push(current);
        const connections = adjList[current];

        for (const connection of connections) {
            if (!seen.has(connection)) {
                stack.push(connection);
                seen.add(connection);
            }
        }
    }
    return values;
}