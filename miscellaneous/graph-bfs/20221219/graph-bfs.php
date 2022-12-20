<?php

declare(strict_types=1);

function graphBfs(array &$graph): array
{
    $queue = [0];
    $values = [];

    while (count($queue)) {
        $vertex = array_shift($queue);
        $values[] = $vertex;

        foreach($graph[$vertex] as $neighbor) {
            if (!in_array($neighbor, $values)) {
                $queue[] = $neighbor;
            }
        }
    }

    return $values;
}