<?php

declare(strict_types=1);

function graphBFs(array $adjList): array
{
    $values = [];
    $seen = [0];
    $queue = [0];

    while ($queue) {
        $current = array_shift($queue);
        $values[] = $current;

        foreach ($adjList[$current] as $connection) {
            if (!in_array($connection, $seen)) {
                $seen[] = $connection;
                $queue[] = $connection;
            }
        }
    }

    return $values;
}