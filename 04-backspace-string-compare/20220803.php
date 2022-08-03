<?php

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function backspaceCompare(string $s, string $t)
    {
        $cleanString = function(string $str): string {
            $charStack = [];

            for ($i = 0; $i < strlen($str); ++$i) {
                if ($str[$i] !== '#') {
                    array_push($charStack, $str[$i]);
                } else if (count($charStack)) {
                    array_pop($charStack);
                }
            }

            return implode('', $charStack);
        };

        return $cleanString($s) === $cleanString($t);
    }
}