from typing import List, Tuple


def bfs(adj_list: Tuple, start: int) -> List:
    queue = [start]
    seen = {start}
    results: [int] = []

    while queue:
        current = queue.pop(0)
        connections = adj_list[current]
        results.append(current)

        for connection in connections:
            if connection not in seen:
                queue.append(connection)
                seen.add(connection)

    return results
