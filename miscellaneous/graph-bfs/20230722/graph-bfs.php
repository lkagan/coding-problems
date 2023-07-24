<?php

function graphBfs(array $adjList): array
{
    $queue = [0];
    $seen = [0];
    $values = [];

    while ($queue) {
        $current = array_shift($queue);
        $values[] = $current;
        $connections = $adjList[$current];

        foreach ($connections as $connection) {
            if (!in_array($connection, $seen)) {
                $seen[] = $connection;
                $queue[] = $connection;
            }
        }
    }

    return $values;
}
