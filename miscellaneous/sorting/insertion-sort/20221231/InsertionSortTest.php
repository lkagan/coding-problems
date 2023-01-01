<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/insertion-sort.php';

class InsertionSortTest extends TestCase
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

    /** @test */
    function insertion_sort()
    {
        array_map(function ($nums) {
            $sorted = $nums;
            sort($sorted);
            $this->assertEquals(
                expected: $sorted,
                actual: $this->insertion_sort($nums)
            );
        }, $this->testCases);
    }
}