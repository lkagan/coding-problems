<?php

declare(strict_types=1);

class Solution
{
    const NOT_FOUND = [-1, -1];

    public function searchRange(array &$nums, int $target): array
    {
        if (count($nums) === 0) {
            return static::NOT_FOUND;
        }

        $start = $this->binarySearch($nums, 0, count($nums) - 1, $target);
        $end = $start;

        if ($start === null) {
            return static::NOT_FOUND;
        }

        while ($start !== null) {
            $temp = $start;
            $start = $this->binarySearch($nums, 0, $start - 1, $target);
        }

        $start = $temp;

        while ($end !== null) {
            $temp = $end;
            $end = $this->binarySearch($nums, $end + 1, count($nums) - 1, $target);
        }

        $end = $temp;

        return [$start, $end];
    }

    protected function binarySearch(
        array &$nums,
        int $start,
        int $end,
        int $target
    ): ?int {
        while ($start <= $end) {
            $mid = (int) floor(($start + $end) / 2);

            if ($nums[$mid] === $target) {
                return $mid;
            } else if ($nums[$mid] < $target) {
                $start = $mid + 1;
            } else {
                $end = $mid - 1;
            }
        }

        return null;
    }
}