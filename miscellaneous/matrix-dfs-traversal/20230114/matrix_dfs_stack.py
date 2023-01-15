from typing import List, Tuple

DIRECTIONS = [(-1, 0), (0, 1), (1, 0), (0, -1)]


def matrix_dfs(matrix: List[List[int]], start: Tuple[int]) -> List[int]:
    values: List[int] = []
    stack: List[Tuple[int]] = [start]
    seen: List[List[int]] = [[False for x in matrix[0]] for y in matrix]
    seen[start[0]][start[1]] = True

    while stack:
        row, col = stack.pop()
        values.append(matrix[row][col])

        for yOffset, xOffset in DIRECTIONS:
            newRow = row + yOffset
            newCol = col + xOffset

            if in_bounds(newRow, newCol, matrix) and not seen[newRow][newCol]:
                seen[newRow][newCol] = True
                stack.append((newRow, newCol))

    return values


def in_bounds(row: int, col: int, matrix: List[List[int]]):
    return 0 <= row < len(matrix) and 0 <= col < len(matrix[0])