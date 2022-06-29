<?php

function greatestVolumePair(array $nums)
{
    $largestArea = 0;

    for ($p1 = 0; $p1 < count($nums) - 1; ++$p1) {
        for ($p2 = 0; $p2 < count($nums); ++$p2) {
            $length = $p2 - $p1;
            $width = min($nums[$p1], $nums[$p2]);
            $largestArea = max($largestArea, $length * $width);
        }
    }

    return $largestArea;
}

print(greatestVolumePair([7, 1, 3, 9]));