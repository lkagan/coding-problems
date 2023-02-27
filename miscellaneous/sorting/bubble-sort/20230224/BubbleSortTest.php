<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require __DIR__ .'/bubble-sort.php';

class BubbleSortTest extends TestCase
{
    private array $testCases;

    public function __construct()
    {
        parent::__construct();

        $this->testCases = [
            [],
            [2],
            [2, 1],
            [99, 44, 6, 2],
            [1, 2, 3, 4, 5, 6, 9, 100],
            [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
        ];
    }

    public function test_bubble_sort()
    {
        array_map(function ($nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(expected: $sorted, actual: bubbleSort($nums));
        }, $this->testCases);
    }
}

