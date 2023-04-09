<?php

declare(strict_types=1);

function binarySearch(array $nums, int $target, int $start=0, ?int $end=null): int
{
    $end = $end ?: count($nums) - 1;

    if ($end < $start) return -1;

    $mid = (int) floor(($end - $start) / 2) + $start;

    if ($target < $nums[$mid]) return binarySearch($nums, $target, $start, $mid);
    if ($target > $nums[$mid]) return binarySearch($nums, $target, $mid, $end);
    if ($target === $nums[$mid]) return $mid;

    return -1;
}