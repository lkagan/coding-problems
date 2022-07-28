<?php
declare(strict_types=1);

function lengthOfLongestSubstring(string $s): int
{
    $longest = 0;
    $seen = [];
    $left = 0;

    for ($right = 0; $right < strlen($s); ++$right) {
        $currentLetter = $s[$right];

        if (isset($seen[$currentLetter]) && $seen[$currentLetter] >= $left) {
            $left = $seen[$currentLetter] + 1;
        }

        $longest = max($longest, $right - $left + 1);
        $seen[$currentLetter] = $right;
    }

    return $longest;
}