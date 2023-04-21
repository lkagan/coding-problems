from typing import List


def graph_bfs(adj_list) -> List[int]:
    values = []
    queue = [0]
    seen = [0]

    while queue:
        current = queue.pop(0)
        values.append(current)

        for connection in adj_list[current]:
            if connection not in seen:
                seen.append(connection)
                queue.append(connection)

    return values
