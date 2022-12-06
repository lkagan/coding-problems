<?php

declare(strict_types=1);

class Solution
{
    const FRESH      = 1;
    const ROTTEN     = 2;
    const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    public function orangesRotting(array $grid): int
    {
        $minutes     = 0;
        $freshCount  = 0;
        $rottenQueue = [];

        for ($i = 0; $i < count($grid); ++$i) {
            for ($j = 0; $j < count($grid[0]); ++$j) {
                if ($grid[$i][$j] === self::ROTTEN) {
                    $rottenQueue[] = [$i, $j];
                } elseif ($grid[$i][$j] === self::FRESH) {
                    $freshCount++;
                }
            }
        }

        $numRottenThisMinute = count($rottenQueue);

        while (count($rottenQueue)) {
            if ($numRottenThisMinute === 0) {
                $numRottenThisMinute = count($rottenQueue);
                $minutes++;
            }

            [$row, $col] = array_shift($rottenQueue);
            $numRottenThisMinute--;

            foreach (self::DIRECTIONS as $dir) {
                $newRow = $row + $dir[0];
                $newCol = $col + $dir[1];

                if ($this->inBounds(grid: $grid, row: $newRow, col: $newCol)
                    && $grid[$newRow][$newCol] === self::FRESH) {
                    $grid[$newRow][$newCol] = self::ROTTEN;
                    $freshCount--;
                    $rottenQueue[] = [$newRow, $newCol];
                }
            }
        }

        return $freshCount > 0 ? -1 : $minutes;
    }

    private function inBounds(array $grid, int $row, int $col): bool
    {
        return $row >= 0 && $row < count($grid) && $col >= 0 && $col < count($grid[0]);
    }
}