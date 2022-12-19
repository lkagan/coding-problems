from typing import List


class Solution:
    GATE = 0
    DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]]

    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        for i in range(len(rooms)):
            for j in range(len(rooms[0])):
                if rooms[i][j] == self.GATE:
                    self.dfs(rooms=rooms, row=i, col=j)
        return None

    def dfs(self, rooms: List[List[int]], row: int, col: int, step: int=0) -> None:
        if not self.in_bounds(rooms, row, col) or (step and step >= rooms[row][col]):
            return None

        rooms[row][col] = step

        for [row_mod, col_mod] in self.DIRECTIONS:
            self.dfs(rooms, row + row_mod, col + col_mod, step + 1)

        return None

    def in_bounds(self, rooms: List[List[int]], row: int, col: int) -> bool:
        return 0 <= row < len(rooms) and 0 <= col < len(rooms[0])
