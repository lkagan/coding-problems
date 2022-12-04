<?php

declare(strict_types=1);

function mergeSort(array $nums): array
{
    if (count($nums) <= 1) return $nums;

    $mid = (int) floor(count($nums) / 2);

    return merge(
        mergeSort(array_slice($nums, 0, $mid)),
        mergeSort(array_slice($nums, $mid))
    );

    return $nums;
}

function merge(array $left, array $right): array
{
    $results = [];

    while (count($left) && count($right)) {
        $results[] = $left[0] < $right[0] ? array_shift($left)
            : array_shift($right);
    }

    return [...$results, ...$left, ...$right];
}