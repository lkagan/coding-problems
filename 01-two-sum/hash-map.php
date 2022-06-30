<?php
require '../utils/utils.php';

function twoSum (array $nums, int $target)
{
    $seen = [];

    for ($i = 0; $i < (count($nums)); ++$i) {
        $missing = $target - $nums[$i];

        if (isset($seen["$missing"])) {
            return [$seen["$missing"], $i];
        }

        $seen[$nums[$i]] = $i;
    }

    return null;

}

printJson(twoSum([ 2, 7, 11, 15 ], 9)); // [0, 1]
printJson(twoSum([ 3, 2, 4 ], 6)); // [1, 2]
printJson(twoSum([ 3, 3 ], 6)); // [0, 1]
printJson(twoSum([3], 6)); // null
printJson(twoSum([], 6)); // null