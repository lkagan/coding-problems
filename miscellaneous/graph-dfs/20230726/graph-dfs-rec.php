<?php
declare(strict_types=1);

function dfs(array $adjList, int $current, ?array &$seen=null, ?array &$values=null): array
{
    $seen = $seen ?: [$current];
    $values = $values ?: [$current];

    foreach ($adjList[$current] as $connection) {
        if (!in_array($connection, $seen)) {
            $seen[] = $connection;
            $values[] = $connection;
            dfs($adjList, $connection, $seen, $values);
        }
    }

    return $values;
}