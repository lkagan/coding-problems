<?php

declare(strict_types=1);

function mergeSort(array &$nums): array
{
    if (count($nums) <= 1) {
        return $nums;
    }

    $mid = (int)floor(count($nums) / 2);
    $left = array_slice($nums, 0, $mid);
    $right = array_slice($nums, $mid);
    $leftSorted = mergeSort($left);
    $rightSorted = mergeSort($right);

    return merge($leftSorted, $rightSorted);
}

function merge(array &$left, array &$right): array
{
    $results = [];

    while (count($left) && count($right)) {
        if ($left[0] < $right[0]) {
            $results[] = array_shift($left);
        } else {
            $results[] = array_shift($right);
        }
    }

    return [...$results, ...$left, ...$right];
}