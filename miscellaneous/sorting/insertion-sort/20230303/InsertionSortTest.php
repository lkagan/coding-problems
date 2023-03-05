<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require './insertion-sort.php';


class InsertionSortTest extends TestCase
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

    public function test_insertion_sort()
    {
        foreach ($this->testData as $nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(expected: $sorted, actual: insertionSort($nums));
        }
    }
}