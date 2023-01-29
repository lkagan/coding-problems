<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/Solution.php';

class SolutionTest extends TestCase
{
    private array $testData;

    public function __construct()
    {
        parent::__construct();

        $this->testData = [
            new TestData(6, [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]], true),
            new TestData(2, [[1, 0], [0, 1]], false),
        ];
    }

    public function test_can_finish()
    {
        array_map(function($data) {
            $this->assertEquals(
                (new Solution())->canFinish($data->numCourses, $data->preReqs),
                $data->result
            );
        }, $this->testData);
    }
}


class TestData
{
    public function __construct(
        public int $numCourses,
        public array $preReqs,
        public bool $result
    ) { }
}