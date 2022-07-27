<?php

function lengthOfLongestSubstring(string $s)
{
    $longest = 0;

    for ($i = 0; $i < strlen($s); ++$i) {
        $currentLength = 0;
        $seen = [];

        for ($j = $i; $j < strlen($s); ++$j) {
            if (!$seen[$s[$j]]) {
                $seen[$s[$j]] = true;
                ++$currentLength;
            } else {
                break;
            }

            $longest = max($longest, $currentLength);
         }
    }

    return $longest;
}