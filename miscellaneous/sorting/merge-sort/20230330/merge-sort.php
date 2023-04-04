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
}

function merge(array $left, array $right): array
{
    $merged = [];

    while (count($left) && count($right)) {
        $merged[] = $left[0] < $right[0] ? array_shift($left) : array_shift($right);
    }

    return [...$merged, ...$left, ...$right];
}