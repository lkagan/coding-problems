<?php

declare(strict_types=1);

class Solution
{
    function findKthLargest(array $nums, int $k): int
    {
        $indexToFind = count($nums) - $k;
        return $this->quickSelect($nums, 0, count($nums) - 1, $indexToFind);
    }

    function quickSelect(array $nums, int $start, int $end, int $indexToFind): int
    {
        if ($start === $end) {
            return $nums[$start];
        }

        $left = $right = $start;

        while ($right < $end) {
            if ($nums[$right] <= $nums[$end]) {
                [$nums[$left], $nums[$right]] = [$nums[$right], $nums[$left]];
                $left++;
            }

            $right++;
        }

        [$nums[$left], $nums[$end]] = [$nums[$end], $nums[$left]];

        if ($left === $indexToFind) {
            return $nums[$indexToFind];
        } else if ($left > $indexToFind) {
            return $this->quickSelect($nums, $start, $left - 1, $indexToFind);
        } else {
            return $this->quickSelect($nums, $left + 1, $end, $indexToFind);
        }
    }
}

$nums = [3, 2, 1, 5, 6, 4];
$k = 2; // 5
print((new Solution())->findKthLargest($nums, $k));