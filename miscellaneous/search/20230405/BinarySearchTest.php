<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/binary-search.php';

class BinarySearchTest extends TestCase
{
    protected array $nums = [2, 5, 99, 128, 167, 2000, 45000];
    protected int $target = 167;

    public function test_binary_search()
    {
        $this->assertEquals(
            expected: array_search($this->target, $this->nums),
            actual: binarySearch($this->nums, $this->target)
        );
    }
}