<?php

declare(strict_types=1);

class Solution
{
    public function validPalindrome(string $s): bool
    {
        $s = strtolower(string: preg_replace(
            pattern: '/[^a-zA-Z0-9]/',
            replacement: '',
            subject: $s
        ));
        $left = 0;
        $right = strlen($s) - 1;

        while ($left < $right) {
            if ($s[$left] !== $s[$right]) {
                return $this->isPurePalindrome(s: $s, left: $left + 1, right: $right)
                    || $this->isPurePalindrome(s: $s, left: $left, right: $right - 1);
            }

            $left++;
            $right--;
        }

        return true;
    }

    protected function isPurePalindrome(string $s, int $left, int $right): bool
    {
        while ($left < $right) {
            if ($s[$left] !== $s[$right]) {
                return false;
            }

            $left++;
            $right--;
        }

        return true;
    }
}