<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require __DIR__ . '/selection-sort.php';

class SelectionSortTest extends TestCase
{
    private array $testCases;

    function __construct()
    {
        $this->testCases = [
            [],
            [2],
            [2, 1],
            [99, 44, 6, 2],
            [1, 2, 3, 4, 5, 6, 9, 100],
            [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
        ];

        parent::__construct();
    }

    function test_selection_sort()
    {
        array_map(function (array $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(expected: $sorted, actual: selectionSort($nums));
        }, $this->testCases);
    }
}
