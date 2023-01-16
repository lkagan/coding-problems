<?php

declare(strict_types=1);

function matrixDfs(array &$matrix): array
{
    $values = [];
    $stack = [[0, 0]];
    $seen = array_fill(0, count($matrix), array_fill(0, count($matrix[0]), false));
    $seen[0][0] = true;
    $directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while ($stack) {
        [$row, $col] = array_pop($stack);
        $values[] = $matrix[$row][$col];

        foreach ($directions as [$offsetY, $offsetX]) {
            $newRow = $row + $offsetY;
            $newCol = $col + $offsetX;

            if (inBounds($newRow, $newCol, $matrix) && !$seen[$newRow][$newCol]) {
                $seen[$newRow][$newCol] = true;
                $stack[] = [$newRow, $newCol];
            }
        }
    }

    return $values;
}

function inBounds(int $row, int $col, &$matrix): bool
{
    return $row >= 0 && $row < count($matrix) && $col >= 0 && $col < count($matrix[0]);
}