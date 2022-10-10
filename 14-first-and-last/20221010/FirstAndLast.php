<?php

declare(strict_types=1);

class Solution
{
    function searchRange(array $nums, int $target): array
    {
        if (!count($nums)) {
            return [-1,-1];
        }

        $first = $this->binarySearch($nums, $target, 0, count($nums) - 1);

        if ($first === null) {
            return [-1,-1];
        }

        $temp = 0;
        $last = $first;

        while ($first !== null) {
            $temp = $first;
            $first = $this->binarySearch($nums, $target, 0, $first - 1);
        }

        $first = $temp;

        while ($last !== null) {
            $temp = $last;
            $last = $this->binarySearch($nums, $target, $last + 1, count($nums) - 1);
        }

        $last = $temp;

        return [$first, $last];
    }

    function binarySearch(
        array $nums,
        int $target,
        int $first,
        int $last
    ): int | null
    {
        while ($first <= $last) {
            $mid = (int) floor(($last - $first) / 2) + $first;

            if ($nums[$mid] === $target) {
                return $mid;
            } else if ($target < $nums[$mid]) {
                $last = $mid - 1;
            } else {
                $first = $mid + 1;
            }
        }

        return null;
    }
}