<?php

declare(strict_types=1);

function quickSort(array &$nums, int $start, int $end): array
{
    if ($end <= $start) {
        return $nums;
    }

    $pivot = $end;
    $left = $right = $start;

    while ($right < $end) {
        if ($nums[$right] <= $nums[$pivot]) {
            [$nums[$right], $nums[$left]] = [$nums[$left], $nums[$right]];
            ++$left;
        }

        ++$right;
    }

    [$nums[$left], $nums[$pivot]] = [$nums[$pivot], $nums[$left]];

    $start < $left - 1 && quickSort($nums, $start, $left - 1);
    $end > $left + 1 && quickSort($nums, $left + 1, $end);

    return $nums;
}