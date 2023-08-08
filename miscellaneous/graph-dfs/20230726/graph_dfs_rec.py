from typing import List, Set


def dfs(adj_list: List[int], current: int, seen: Set[int] = None, values: List[int] = None) -> List[int]:
    values = values or [current]
    seen = seen or {0}

    for connection in adj_list[current]:
        if connection not in seen:
            seen.add(connection)
            values.append(connection)
            dfs(adj_list, connection, seen, values)

    return values