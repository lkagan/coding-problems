<?php

declare(strict_types=1);

class Solution
{
    protected array $seen;
    protected array $grid;
    protected const DIRS = [[0,1], [1,0], [0,-1], [-1,0]];

    public function numIslands(array &$grid): int
    {
        $count = 0;
        $this->seen = $this->getSeen($grid);
        $this->grid =& $grid;

        for ($i = 0; $i < count($grid); ++$i) {
            for ($j = 0; $j < count($grid[0]); ++$j) {
                if ($grid[$i][$j] === '1') {
                    $this->convertToWater(row: $i, col: $j);
                    $count++;
                }
            }
        }

        return $count;
    }

    protected function convertToWater(int $row, int $col): void
    {
        $queue = [[$row, $col]];

        while (count($queue)) {
            [$row, $col] = array_shift($queue);
            $this->grid[$row][$col] = '0';

            foreach (static::DIRS as $dir) {
                [$newRow, $newCol] = [$row + $dir[0], $col + $dir[1]];

                if (!$this->validCell($newRow, $newCol)
                    || $this->seen[$newRow][$newCol]) {
                    continue;
                }

                if ($this->grid[$newRow][$newCol] === '1') {
                    $queue[] = [$newRow, $newCol];
                }

                $this->seen[$newRow][$newCol] = true;
            }
        }
    }

    protected function getSeen(array $grid): array
    {
        return array_fill(
            0,
            count($grid),
            array_fill(0, count($grid[0]), false)
        );
    }

    protected function validCell(int $row, int $col): bool
    {
        return $row >= 0 && $row < count($this->grid)
            && $col >= 0 && $col < count($this->grid[0]);
    }
}