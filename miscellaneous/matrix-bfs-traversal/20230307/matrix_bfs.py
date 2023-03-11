from typing import Tuple, List

DIRS = (-1, 0), (0, 1), (1, 0), (0, -1)


def bfs(matrix: Tuple) -> Tuple[int]:
    values: List[int] = []
    seen = {matrix[0][0]}
    queue = [(0, 0)]

    while queue:
        row, col = queue.pop(0)
        values.append(matrix[row][col])

        for yOffset, xOffset in DIRS:
            new_row = row + yOffset
            new_col = col + xOffset

            if (in_bounds(new_row, new_col, matrix) and
                    matrix[new_row][new_col] not in seen):
                queue.append((new_row, new_col))
                seen.add(matrix[new_row][new_col])

    return tuple(values)


def in_bounds(row: int, col: int, matrix: Tuple[Tuple[int]]) -> bool:
    return 0 <= row < len(matrix) and 0 <= col < len(matrix[0])
