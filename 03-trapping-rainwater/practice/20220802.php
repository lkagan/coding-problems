<?php

class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer
     */
    function trap(array $heights): int
    {
        $leftP = $leftMax = $rightMax = $totalWater = 0;
        $rightP = count($heights) - 1;

        while ($leftP !== $rightP) {
            $leftVal = $heights[$leftP];
            $rightVal = $heights[$rightP];

            if ($leftVal < $rightVal) {
                if ($leftVal > $leftMax) {
                    $leftMax = $leftVal;
                } else {
                    $totalWater += ($leftMax - $leftVal);
                }

                $leftP++;
            } else {
                if ($rightVal > $rightMax) {
                    $rightMax = $rightVal;
                } else {
                    $totalWater += ($rightMax - $rightVal);
                }

                $rightP--;
            }
        }

        return $totalWater;
    }
}