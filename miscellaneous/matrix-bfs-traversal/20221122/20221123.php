<?php

declare(strict_types=1);

function flatten(array &$matrix): array
{
    $results = [];
    $row = array_fill(start_index: 0, count: count($matrix[0]), value: false);
    $seen = array_fill(start_index: 0, count: count($matrix), value: $row);
    dfs(matrix: $matrix, seen: $seen, results: $results, row: 0, col: 0);
    return $results;
}

function dfs(array &$matrix, array &$seen, array &$results, int $row, int $col): void
{
    $dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    if ($row < 0 || $col < 0 || $row >= count($matrix)
        || $col >= count($matrix[0]) || $seen[$row][$col]) {
        return;
    }

    $results[] = $matrix[$row][$col];
    $seen[$row][$col] = true;

    for ($i = 0; $i < count($dirs); ++$i) {
        dfs(
            matrix: $matrix,
            seen: $seen,
            results: $results,
            row: $row + $dirs[$i][0],
            col: $col + $dirs[$i][1]
        );
    }
}
