<?php

declare(strict_types=1);


function twoSum(array $nums, int $target): array 
{
    $seen = [];

    for ($i = 0; $i < count($nums); ++$i) {
        $diff = $target - $nums[$i];
        
        if (array_key_exists($diff, $seen)) {
            return [$i, $seen[$diff]];
        }

        $seen[$nums[$i]] = $i;
    }

    return [];
}

$result = twoSum([0,2,4,6], 10);
print(sort($result) == [2,3] ? 'passed' : 'failed');
print(PHP_EOL);

$result = twoSum([1,2,4,7,8], 11);
print(sort($result) == [2,3] ? 'passed' : 'failed');
print(PHP_EOL);
