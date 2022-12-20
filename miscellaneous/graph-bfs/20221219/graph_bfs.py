from typing import List


def graph_bfs(graph: List[List[int]]) -> List[int]:
    queue = [0]
    values = []

    while len(queue):
        vertex = queue.pop(0)
        values.append(vertex)

        for neighbor in graph[vertex]:
            if neighbor not in values:
                queue.append(neighbor)

    return list(values)