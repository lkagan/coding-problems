<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require __DIR__ . '/quick-sort.php';

class QuickSortTest extends TestCase
{
    private array $testData;

    public function __construct()
    {
        parent::__construct();

        $this->testData = [
            [],
            [2],
            [2, 1],
            [99, 44, 6, 2],
            [1, 2, 3, 4, 5, 6, 9, 100],
            [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
        ];
    }

    public function test_quick_sort()
    {
        array_map(function (array $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(
                expected: $sorted,
                actual: quickSort($nums, 0, count($nums) - 1)
            );
        }, $this->testData);
    }
}