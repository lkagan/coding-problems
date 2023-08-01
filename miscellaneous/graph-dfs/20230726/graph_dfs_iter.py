from typing import List, Tuple


def dfs(adj_list: List[int], start: int) -> Tuple[int]:
    values = []
    stack = [start]
    seen = [start]

    while stack:
        current = stack.pop()
        values.append(current)
        connections = adj_list[current]

        for connection in connections:
            if connection not in seen:
                stack.append(connection)
                seen.append(connection)

    return tuple(values)