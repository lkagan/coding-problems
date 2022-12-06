<?php

declare(strict_types=1);
require __DIR__ . '/Solution.php';
use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    private array $testCases;
    private Solution $solution;

    public function __construct()
    {
        parent::__construct();

        $this->testCases = [
            new SolutionTestCase(4, [[2, 1, 1], [1, 1, 0], [0, 1, 1]]),
            new SolutionTestCase(-1, [[2, 1, 1], [0, 1, 1], [1, 0, 1]]),
            new SolutionTestCase(0, [[0, 2]])
        ];

        $this->solution = new Solution();
    }

    public function test_rotten_oranges()
    {
        foreach ($this->testCases as $testCase) {
            $this->assertEquals(
                expected: $testCase->expected,
                actual: $this->solution->orangesRotting($testCase->grid)
            );
        }
    }
}

class SolutionTestCase
{
    public function __construct(public int $expected, public array $grid) { }
}