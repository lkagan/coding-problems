export default (graph: number[][]): number[] => {
    const values: number[] = [];
    dfs(graph, values, 0);
    return values;
}

function dfs(graph: number[][], values: number[], vertex: number): void
{
   values.push(vertex);

   graph[vertex].forEach(connection => {
       if (!values.includes(connection)) {
           dfs(graph, values, connection);
       }
   })
}