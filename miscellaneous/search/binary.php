<?php

declare(strict_types=1);

function binarySearch(array &$nums, int $term): ?int
{
    $left = 0;
    $right = count($nums) - 1;

    while ($left <= $right) {
        $mid = (int) floor(($left + $right) / 2);

        if ($term === $nums[$mid]) {
            return $mid;
        } else if ($term < $nums[$mid]) {
            $right = $mid - 1;
        } else {
            $left = $mid + 1;
        }
    }

    return null;
}

$nums = [1,2,3,4,5,7];
$term = 7;

print(binarySearch($nums, $term) . PHP_EOL);