<?php
function findTwoSum($nums, $target) 
{
    if (count($nums) < 2) {
        return null;
    }

    for ($i = 0; $i < count($nums) - 1; ++$i) {
        for ($j = $i + 1; $j < count($nums); ++$j) {
            if ($nums[$i] + $nums[$j] === $target) {
                return [$i, $j];
            }
        }
    }

    return null;
}

print(json_encode(findTwoSum([ 2, 7, 11, 15 ], 9)) . PHP_EOL); // [0, 1]
print(json_encode(findTwoSum([ 3, 2, 4 ], 6)) . PHP_EOL); // [1, 2]
print(json_encode(findTwoSum([ 3, 3 ], 6)) . PHP_EOL); // [0, 1]