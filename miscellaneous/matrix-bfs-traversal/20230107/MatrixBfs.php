<?php

declare(strict_types=1);

class MatrixBfs
{
    protected const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    protected array $matrix;
    protected array $seen;

    public function matrixBfs(array &$matrix): array
    {
        $this->matrix = $matrix;
        $values = [];
        $queue = [[0, 0]];
        $this->seen[serialize([0, 0])] = true;

        while ($queue) {
            [$row, $col] = array_shift($queue);
            $values[] = $matrix[$row][$col];

            foreach (static::DIRS as [$yOffset, $xOffset]) {
                $newRow = $row + $yOffset;
                $newCol = $col + $xOffset;

                if ($this->inBounds(row: $newRow, col: $newCol)
                        && !$this->hasSeen($newRow, $newCol)) {
                    $this->seen[serialize([$newRow, $newCol])] = true;
                    $queue[] = [$newRow, $newCol];
                }
            }
        }

        return $values;
    }

    protected function inBounds(int $row, int $col): bool
    {
        return 0 <= $row && $row < count($this->matrix)
            && 0 <= $col && $col < count($this->matrix[0]);
    }

    protected function hasSeen(int $row, int $col): bool
    {
        return array_key_exists(serialize([$row, $col]), $this->seen);
    }
}