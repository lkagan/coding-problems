<?php

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/Solution.php';

class SolutionTest extends TestCase
{
    private array $testData;

    public function __construct()
    {
        parent::__construct();

        $this->testData = [
            [3, [[0, 1], [0, 2]], true],
            [6, [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]], true],
            [2, [[1, 0], [0, 1]], false],
        ];
    }

    public function test_can_finish()
    {
        foreach ($this->testData as [$numCourses, $prerequisites, $response]) {
            $this->assertEquals((new Solution())->canFinish(
                numCourses: $numCourses,
                prerequisites: $prerequisites
            ), $response);
        }
    }
}