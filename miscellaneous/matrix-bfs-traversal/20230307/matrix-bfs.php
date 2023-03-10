<?php

declare(strict_types=1);

const DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

function bfs(array $matrix): array
{
    $values = [];
    $seen = [$matrix[0][0]];
    $queue = [[0,0]];

    while (count($queue)) {
        [$row, $col] = array_shift($queue);
        $values[] = $matrix[$row][$col];

        foreach (DIRS as [$yOffset, $xOffset]) {
            $newRow = $row + $yOffset;
            $newCol = $col + $xOffset;

            if (inBounds($newRow, $newCol, $matrix)
                    && !in_array($matrix[$newRow][$newCol], $seen)) {
                $seen[] = $matrix[$newRow][$newCol];
                $queue[] = [$newRow, $newCol];
            }
        }
    }

    return $values;
}

function inBounds(int $row, int $col, array $matrix): bool
{
    return $row >= 0 && $row < count($matrix)
            && $col >= 0 && $col < count($matrix[0]);
}