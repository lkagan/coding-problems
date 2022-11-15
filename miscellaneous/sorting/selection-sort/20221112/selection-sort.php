<?php

declare(strict_types=1);

function selectionSort(array $nums): array
{
    $length = count($nums);

    if ($length < 2) {
        return $nums;
    }

    $sorted = true;


    for ($i = 0; $i < $length - 1; ++$i) {
        $min = $i;

        for ($j = $i + 1; $j < $length; ++$j) {
            if ($nums[$j] < $nums[$min]) {
                $min = $j;
                $sorted = false;
            }
        }

        if ($sorted) {
            return $nums;
        }

        $min !== $i && [$nums[$i], $nums[$min]] = [$nums[$min], $nums[$i]];
    }

    return $nums;
}
