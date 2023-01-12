<?php

declare(strict_types=1);

function graphDft(array &$graph): array
{
    $stack = [0];
    $values = [];

    while (count($stack)) {
        $vertex = array_pop($stack);
        $values[] = $vertex;

        foreach ($graph[$vertex] as $connection) {
            if (!in_array(needle: $connection, haystack: $values)) {
                $stack[] = $connection;
            }
        }
    }

    return $values;
}
