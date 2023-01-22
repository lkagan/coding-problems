from typing import Tuple, List


class Solution:
    _offsets = (-1, 0), (0, 1), (1, 0), (0, -1)
    _matrix: Tuple[Tuple[int, int, int, int],
            Tuple[int, int, int, int],
            Tuple[int, int, int, int],
            Tuple[int, int, int, int],
    ]

    def matrix_bfs(self, matrix: Tuple[Tuple[int, int, int, int]]) -> List[int]:
        values: List[int] = []
        queue = [(0, 0)]
        seen = {(0, 0)}
        self._matrix = matrix

        while queue:
            row, col = queue.pop(0)
            values.append(self._matrix[row][col])

            for yOffset, xOffset in self._offsets:
                new_row = row + yOffset
                new_col = col + xOffset

                if (self._in_bounds(new_row, new_col) and
                        not (new_row, new_col) in seen):
                    seen.add((new_row, new_col))
                    queue.append((new_row, new_col))

        return values

    def _in_bounds(self, row: int, col: int) -> bool:
        return 0 <= row < len(self._matrix) and 0 <= col < len(self._matrix[0])
