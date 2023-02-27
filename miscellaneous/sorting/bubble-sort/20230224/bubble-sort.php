<?php

declare(strict_types=1);

function bubbleSort(array $nums): array
{
    for ($i = 0; $i < count($nums) - 1; ++$i) {
        for ($j = 0; $j < count($nums) - $i - 1; ++$j) {
            $nums[$j] > $nums[$j+1] && ([$nums[$j], $nums[$j+1]] = [$nums[$j+1], $nums[$j]]);
        }
    }

    return $nums;
}