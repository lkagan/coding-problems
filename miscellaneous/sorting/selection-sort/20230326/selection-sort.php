<?php

declare(strict_types=1);

function selectionSort(array $nums): array
{
    $sorted = true;

    for ($i = 0; $i < count($nums) - 1; ++$i) {
        for ($j = $i + 1; $j < count($nums); ++$j) {
            if ($nums[$j] < $nums[$i]) {
                $sorted = false;
                [$nums[$i], $nums[$j]] = [$nums[$j], $nums[$i]];
            }
        }

        if ($sorted) return $nums;
    }

    return $nums;
}