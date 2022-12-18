<?php

class Solution
{
    const GATE       = 0;
    const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    public function wallsAndGates(array &$rooms): array
    {
        for ($i = 0; $i < count($rooms); $i++) {
            for ($j = 0; $j < count($rooms[0]); $j++) {
                if ($rooms[$i][$j] === self::GATE) {
                    $this->dfs(rooms: $rooms, row: $i, col: $j);
                }
            }
        }

        return $rooms;
    }

    private function dfs(array &$rooms, int $row, int $col, ?int $step = 0): void
    {
        if (!$this->inBounds($rooms, $row, $col) ||
            ($step > 0 && $step >= $rooms[$row][$col])) {
            return;
        }

        $rooms[$row][$col] = $step;

        foreach (self::DIRECTIONS as [$rowAdj, $colAdj]) {
            $this->dfs($rooms, $row + $rowAdj, $col + $colAdj, $step + 1);
        }
    }

    private function inBounds(array &$rooms, int $row, int $col): bool
    {
        return $row >= 0 && $row < count($rooms) &&
            $col >= 0 && $col < count($rooms[0]);
    }
}
