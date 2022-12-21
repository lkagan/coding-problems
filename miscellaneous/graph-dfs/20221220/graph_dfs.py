from typing import List


def graph_dfs(graph: [List[List[int]]]) -> List[int]:
    values: List[int] = []
    dfs(graph, values, 0)
    return values


def dfs(graph: List[List[int]], values: List[int], vertex: int) -> None:
    values.append(vertex)

    for neighbor in graph[vertex]:
        if neighbor not in values:
            dfs(graph, values, neighbor)


