<?php

declare(strict_types=1);

function insertionSort(array $nums): array {
    for ($i = 1; $i < count($nums); ++$i) {
        $j = $i - 1;
        $current = $nums[$i];

        while ($j >= 0 && $current < $nums[$j]) {
            $nums[$j+1] = $nums[$j--];
        }

        $nums[++$j] = $current;
    }

    return $nums;
}