<?php

declare(strict_types=1);

function binarySearch(array $values, int $target, int $start=0, ?int $end=null): int
{
    $end = $end ?? count($values) - 1;
    $mid = (int) floor(($end - $start) / 2) + $start;

    if ($target < $values[$mid]) {
        return binarySearch($values, $target, $start, $mid - 1);
    } else if ($target > $values[$mid]) {
        return binarySearch($values, $target, $mid + 1, $end);
    } else if ($target === $values[$mid]) {
        return $mid;
    }

    return -1;
}

