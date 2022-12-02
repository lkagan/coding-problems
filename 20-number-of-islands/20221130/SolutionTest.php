<?php

declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require './Solution.php';

class SolutionTest extends TestCase
{
    private array    $testCases;
    private Solution $solution;

    public function __construct()
    {
        parent::__construct();

        $this->solution = new Solution();

        $this->testCases = [
            new SolutionTestCase(
                count: 1,
                grid: [["1", "1", "1", "1", "0"],
                       ["1", "1", "0", "1", "0"],
                       ["1", "1", "0", "0", "0"],
                       ["0", "0", "0", "0", "0"]]
            ),
            new SolutionTestCase(
                count: 3,
                grid: [["1", "1", "0", "0", "0"],
                       ["1", "1", "0", "0", "0"],
                       ["0", "0", "1", "0", "0"],
                       ["0", "0", "0", "1", "1"]],
            )
        ];
    }

    public function test_num_islands()
    {
        array_map(function (SolutionTestCase $testCase) {
            $this->assertEquals(
                expected: $testCase->count,
                actual: $this->solution->numIslands($testCase->grid)
            );
        }, $this->testCases);
    }
}

class SolutionTestCase
{
    public function __construct(public int $count, public array $grid)
    {
    }
}