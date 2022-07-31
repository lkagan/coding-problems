<?php

class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum(array $nums, int $target)
    {
        $seen = [];

        for ($i = 0; $i < count($nums); $i++) {
            $current = $nums[$i];
            $numToFind = $target - $current;

            if (isset($seen[$numToFind])) {
                return [$seen[$numToFind], $i];
            } else {
                $seen[$current] = $i;
            }
        }
    }
}