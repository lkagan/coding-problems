<?php
function isPalindrome($s)
{
    $s     = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $s));
    $leftP  = 0;
    $rightP = strlen($s) - 1;

    while ($leftP < $rightP) {
        if ($s[$leftP] !== $s[$rightP]) {
            return false;
        }

        $leftP++;
        $rightP--;
    }

    return true;
}
