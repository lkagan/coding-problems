<?php

function dfs(array $adjList, int $start): array
{
    $stack = [$start];
    $seen = [$start];
    $values = [];

    while ($stack) {
        $current = array_pop($stack);
        $values[] = $current;
        $connections = $adjList[$current];

        foreach ($connections as $connection) {
            if (!in_array($connection, $seen)) {
                $seen[] = $connection;
                $stack[] = $connection;
            }
        }
    }

    return $values;
}