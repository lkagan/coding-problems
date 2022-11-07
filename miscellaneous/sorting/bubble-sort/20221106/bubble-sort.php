<?php

declare(strict_types=1);

function bubbleSort(array &$nums): array {
    $sorted = true;

    for ($i = 0; $i < count($nums); ++$i) {
        for ($j = 0; $j < count($nums) - $i - 1; ++$j) {
            if ($nums[$j] > $nums[$j+1]) {
                [$nums[$j], $nums[$j+1]] = [$nums[$j+1], $nums[$j]];
                $sorted = false;
            }
        }

        if ($sorted) {
            return $nums;
        }
    }

    return $nums;
}