<?php

declare(strict_types=1);

function bubbleSort(array &$nums): array
{
    $length = count($nums);
    $sorted = true;

    for ($i = 0; $i < $length; ++$i) {
        for ($j = 0; $j < $length - $i - 1; ++$j) {
           if ($nums[$j] > $nums[$j + 1]) {
               [$nums[$j], $nums[$j+1]] = [$nums[$j+1], $nums[$j]];
               $sorted = false;
           }
        }

        if ($sorted) {
            break;
        }
    }

    return $nums;
}