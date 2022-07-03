<?php
require '../utils/utils.php';

function trappedWater(array $heights): int
{
    $totalWater = 0;

    for ($p = 0; $p < count($heights); $p++) {
        $maxLeft = $maxRight = $heights[$p];
        $pLeft = $pRight = $p;

        // Get the largest height on the left side of the current position
        while( $pLeft >= 0) {
            $maxLeft = max($maxLeft, $heights[$pLeft]);
            $pLeft--;
        }

        while ($pRight < count($heights)) {
            $maxRight = max($maxRight, $heights[$pRight]);
            $pRight++;
        }

        // Get the lowest height between the left and right side
        $top = min($maxLeft, $maxRight);

        // Add water if current height is below the lowest height.
        if ($top > $heights[$p]) {
            $totalWater += $top - $heights[$p];
        }
    }

    return $totalWater;
}

$heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

printJson(trappedWater($heights));