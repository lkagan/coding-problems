<?php

declare(strict_types=1);

require './insertion-sort.php';

use PHPUnit\Framework\TestCase;

class InsertionSortTest extends TestCase
{
    private array $testCases;

    function __construct()
    {
        $this->testCases = [

            [2, 1],
            [2],
            []
        ];

        parent::__construct();
    }

    function test_insertion_sort()
    {
        $this->assertTrue(true);
        array_map(function(array $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals($sorted, insertionSort($nums));
        }, $this->testCases);
    }
}