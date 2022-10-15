<?php

declare(strict_types=1);

function insertionSort(array $nums): array
{
    for ($i = 1; $i < count($nums); ++$i) {
        $current = $nums[$i];

        for ($j = $i - 1; $j >= 0 && $nums[$j] > $current; --$j) {
            $nums[$j+1] = $nums[$j];
        }

        $nums[$j+1] = $current;
    }

    return $nums;
}