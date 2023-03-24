from typing import List


def bfs(adj_list: List[List[int]]) -> List[int]:
    values: List[int] = []
    queue = [0]
    seen = [0]

    while queue:
        current = queue.pop(0)
        values.append(current)
        connections = adj_list[current]

        for connection in connections:
            if connection not in seen:
                queue.append(connection)
                seen.append(connection)

    return values
