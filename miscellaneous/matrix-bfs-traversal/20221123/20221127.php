<?php

declare(strict_types=1);

class Matrix
{
    private array $matrix;
    private array $seen;

    public function __construct(array &$matrix)
    {
        $this->matrix = $matrix;

        $this->seen = array_fill(
            0,
            count(value: $this->matrix),
            array_fill(0, count(value: $this->matrix[0]), false)
        );
    }

    public function flatten(): array
    {
        $results = [];
        $queue = [[0, 0]];
        $this->seen[0][0] = true;
        $dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        while (count(value: $queue)) {
            [$row, $col] = array_shift(array: $queue);
            $results[] = $this->matrix[$row][$col];

            foreach ($dirs as $dir) {
                $nextRow = $row + $dir[0];
                $nextCol = $col + $dir[1];

                if ($this->validCell(row: $nextRow, col: $nextCol)) {
                    $this->seen[$nextRow][$nextCol] = true;
                    $queue[] = [$nextRow,$nextCol];
                }
            }
        }

        return $results;
    }

    protected function validCell(int $row, int $col): bool
    {
        return $row >= 0 && $row < count($this->matrix) && $col >= 0
            && $col < count($this->matrix[0]) && !$this->seen[$row][$col];
    }
}
