from typing import List, Set


def graph_bfs(graph: List[List[int]]) -> List[int]:
    values: List[int] = []
    queue = [0]
    seen = {0}

    while (len(queue)):
        vertex = queue.pop(0)
        values.append(vertex)

        for connection in graph[vertex]:
            if connection not in seen:
                seen.add(connection)
                queue.append(connection)

    return values