<?php

declare(strict_types=1);

require __DIR__ . '/Solution.php';
use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    public function test_num_of_minutes()
    {
        $managers = [1,2,-1,1,0];
        $informTime = [5,1,3,0,0];
        $headId = 2;
        $n = count($managers);
        $results = (new Solution())->numOfMinutes($n, $headId, $managers, $informTime);
        $this->assertEquals(expected: 9, actual: $results);
    }
}