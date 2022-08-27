<?php

declare(strict_types=1);

class Solution
{
    /**
     * @param String $s
     * @return Boolean
     */
    function isValid($s)
    {
        $pairs = [
            ')' => '(',
            ']' => '[',
            '}' => '{',
        ];

        $unmatched = [];

        for ($i = 0; $i < strlen($s); ++$i) {
            $char = $s[$i];

            if (array_search($char, $pairs) !== false) {
                array_push($unmatched, $char);
            } else if (array_pop($unmatched) !== $pairs[$char]) {
                return false;
            }
        }

        return count($unmatched) === 0;
    }
}