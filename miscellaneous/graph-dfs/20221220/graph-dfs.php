<?php

declare(strict_types=1);

function graphDfs(array &$graph): array
{
    $values = [];
    dfs(graph: $graph, values: $values, vertex: 0);
    return $values;
}

function dfs(array &$graph, &$values, $vertex): void
{
    $values[] = $vertex;

    foreach ($graph[$vertex] as $neighbor) {
        if (!in_array($neighbor, $values)) {
            dfs($graph, $values, $neighbor);
        }
    }
}