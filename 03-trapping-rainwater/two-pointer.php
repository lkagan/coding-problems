<?php
require('../utils/utils.php');

function trappedWater(Array $heights): int
{
    $totalWater = 0;
    $pLeft = 0;
    $pRight = count($heights) - 1;
    $maxLeft = $heights[$pLeft];
    $maxRight = $heights[$pRight];

    while ($pLeft !== $pRight) {
       if ($heights[$pLeft] <= $heights[$pRight]) {
           $currentHeight = $heights[$pLeft];

           if ($currentHeight < $maxLeft) {
               $totalWater += $maxLeft - $currentHeight;
           } else {
               $maxLeft = $currentHeight;
           }

           $pLeft++;
       } else {
           $currentHeight = $heights[$pRight];

           if ($currentHeight < $maxRight) {
               $totalWater += $maxRight - $currentHeight;
           } else {
               $maxRight = $currentHeight;
           }

           $pRight--;
       }
    }

   return $totalWater;
}


$heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

printJson(trappedWater($heights));