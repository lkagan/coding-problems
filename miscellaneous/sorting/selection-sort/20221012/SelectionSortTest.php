<?php

declare(strict_types=1);

require_once './selection-sort.php';

use PHPUnit\Framework\TestCase;

class SelectionSortTest extends TestCase
{
    private array $testCases;

    function __construct()
    {
        $this->testCases = [
            [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
            [1, 2, 3, 4, 5, 6, 9, 100],
            [99, 44, 6, 2],
            [2, 1],
            [2],
            []
        ];

        parent::__construct();
    }

    function test_selection_sort()
    {
        array_map(function ($testCase) {
            $sorted = $testCase;
            sort($sorted);
            $this->assertEquals($sorted, selectionSort($testCase));
        }, $this->testCases);
    }
}