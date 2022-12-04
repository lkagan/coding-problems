<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require __DIR__ . '/merge-sort.php';

class MergeSortTest extends TestCase
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

    public function test_merge_sort()
    {
        foreach ($this->testCases as $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(actual: mergeSort($nums), expected: $sorted);
        }
    }
}