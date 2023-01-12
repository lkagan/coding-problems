export default (graph: Array<Array<number>>): Set<number> => {
    const values: Set<number> = new Set();
    const stack = [0];

    while (stack.length) {
        const vertex = stack.pop();
        if (vertex === undefined) return values;
        values.add(vertex);

        for (const connection of graph[vertex]) {
            if (!values.has(connection)) {
                stack.push(connection);
            }
        }
    }

    return values;
}