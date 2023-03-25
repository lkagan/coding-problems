<?php

declare(strict_types=1);

function bfs(array $adjList): array
{
    $values = [];
    $seen = [0];
    $queue = [0];

    while (count($queue)) {
       $current = array_shift($queue);
       $values[] = $current;
       $connections = $adjList[$current];

       foreach ($connections as $connection) {
           if (! in_array(needle: $connection, haystack: $seen)) {
               $seen[] = $connection;
               $queue[] = $connection;
           }
       }
    }

    return $values;
}