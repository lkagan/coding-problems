<?php

declare(strict_types=1);

require_once './bubble-sort.php';

use PHPUnit\Framework\TestCase;

class BubbleSortTest extends TestCase
{
    private array $testCases;

    function __construct()
    {
        $this->testCases = [
            [],
            [1],
            [2, 1],
            [3, 1, 11, 6, 2, 4, 5],
        ];

        parent::__construct();
    }

    function test_sorts()
    {
        array_map(function(array $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(bubbleSort($nums), $sorted);
        }, $this->testCases);
    }
}