<?php

declare(strict_types=1);

function quickSort(array &$nums, int $start, int $end): array
{
    if (count($nums) <=1 ) {
        return $nums;
    }

    $pivot = $end;
    $left = $right = $start;

    while ($right < $end) {
        if ($nums[$right] <= $nums[$pivot]) {
            [$nums[$left], $nums[$right]] = [$nums[$right], $nums[$left]];
            ++$left;
        }

        ++$right;
    }

    [$nums[$pivot], $nums[$left]] = [$nums[$left], $nums[$pivot]];

    $start < $left -1 && quickSort($nums, $start, $left -1);
    $left + 1 < $end && quickSort($nums, $left + 1, $end);

    return $nums;
}