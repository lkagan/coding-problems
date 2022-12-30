from typing import List


def matrix_bfs(matrix: List[List[int]]) -> List[int]:
    values: List[int] = []
    queue = [[0, 0]]
    DIRECTIONS = (-1, 0), (0, 1), (1, 0), (0, -1)
    seen = [[False for x in range(len(matrix[0]))] for y in range(len(matrix))]

    while len(queue):
        [row, col] = queue.pop(0)

        for [row_adj, col_adj] in DIRECTIONS:
            new_row = row + row_adj
            new_col = col + col_adj

            if in_bounds(new_row, new_col, matrix) and seen[new_row][new_col] is False:
                queue.append([new_row, new_col])
                
        values.append(matrix[row][col])
        seen[row][col] = True

    return values


def in_bounds(row: int, col: int, matrix: List[List[int]]) -> bool:
    return 0 <= row < len(matrix) and 0 <= col < len(matrix[0])
