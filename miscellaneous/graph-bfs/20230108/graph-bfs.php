<?php

declare(strict_types=1);

function graphBfs(array &$graph): array
{
    $values = [];
    $queue = [0];

    while (count($queue)) {
        $vertex = array_shift($queue);
        $values[] = $vertex;

        array_map(function (int $connection) use (&$values, &$queue) {
            !in_array($connection, $values) && $queue[] = $connection;
        }, $graph[$vertex]);
    }

    return $values;
}