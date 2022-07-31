<?php

class Solution
{
    function maxArea(array $heights): int
    {
       $maxWater = 0;
       $leftP = 0;
       $rightP = count($heights) - 1;

       while ($leftP !== $rightP) {
           $left = $heights[$leftP];
           $right = $heights[$rightP];
           $water = ($rightP - $leftP) * min($left, $right);
           $maxWater = max($water, $maxWater);

           if ($left < $right) {
               $leftP++;
           } else {
               $rightP--;
           }
       }

       return $maxWater;
    }
}