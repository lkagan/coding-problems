<?php

declare(strict_types=1);

function quickSort(array &$nums, int $start, int $end): array
{
    if (count($nums) < 2 || $end <= $start) {
        return $nums;
    }

    $left = $start;
    $right = $start;
    $pivot = $end;

    while ($right < $end) {
        if ($nums[$right] <= $nums[$pivot]) {
            [$nums[$right], $nums[$left]] = [$nums[$left], $nums[$right]];
            $left++;
        }

        $right++;
    }

    [$nums[$pivot], $nums[$left]] = [$nums[$left], $nums[$pivot]];

    $left - 1 > $start && quickSort($nums, $start, $left - 1);
    $left + 1 < $end && quickSort($nums, $left + 1, $end);

    return $nums;
}