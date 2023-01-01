<?php

declare(strict_types=1);

function selectionSort(array $nums): array
{
    $sorted = true;

    for ($i = 0; $i < count($nums) - 1; ++$i) {
        $min = $i;

        for ($j = $i + 1; $j < count($nums); ++$j) {
            if ($nums[$j] < $nums[$min]) {
                $sorted = false;
                $min = $j;
            }
        }

        $i != $min && [$nums[$i], $nums[$min]] = [$nums[$min], $nums[$i]];
    }

    return $nums;
}