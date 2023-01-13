from typing import List

DIRECTIONS = (-1, 0), (0, 1), (1, 0), (0, -1)


def matrix_dft(matrix: List[List[int]]) -> List[int]:
    seen = [[False for x in range(len(matrix[0]))] for y in range(len(matrix))]
    values: List[int] = []
    return dft(0, 0, matrix, values, seen)


def dft(
        row: int,
        col: int,
        matrix: List[List[int]],
        values: List[int],
        seen: List[List[int]]
):
    values.append(matrix[row][col])
    seen[row][col] = True

    for move in DIRECTIONS:
        new_row = row + move[0]
        new_col = col + move[1]

        if in_bounds(new_row, new_col, matrix) and not seen[new_row][new_col]:
            dft(new_row, new_col, matrix, values, seen)

    return values


def in_bounds(row: int, col: int, matrix: List[List[int]]):
    return 0 <= row < len(matrix) and 0 <= col < len(matrix[0])