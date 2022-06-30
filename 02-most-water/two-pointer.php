<?php
require '../utils/utils.php';

function findMaxArea(array $nums): int
{
    $maxArea = 0;
    $p1 = 0;
    $p2 = count($nums) - 1;
    $width = $p2 - $p1;

    while ($width > 0) {
        $area = $width * min($nums[$p1], $nums[$p2]);
        $maxArea = max($maxArea, $area);
        $nums[$p1] < $nums[$p2] ? $p1++ : $p2++;
        --$width;
    }

    return $maxArea;
}

printJson(findMaxArea([5, 3, 2, 8, 7]));
printJson(findMaxArea([5]));
printJson(findMaxArea([]));
