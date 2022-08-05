<?php

declare(strict_types=1);

class Solution
{
    function lengthOfLongestSubstring(string $s): int
    {
        $leftP = 0;
        $maxLength = 0;
        $seen = [];

        for ($rightP = 0; $rightP < strlen($s); ++$rightP) {
            $currentChar = $s[$rightP];

            if (isset($seen[$currentChar]) && $seen[$currentChar] >= $leftP) {
                $leftP = $seen[$currentChar] + 1;
            } else {
                $maxLength = max($maxLength, $rightP - $leftP + 1);
            }

            $seen[$currentChar] = $rightP;
        }

        return $maxLength;
    }
}