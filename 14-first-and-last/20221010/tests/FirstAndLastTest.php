<?php

declare(strict_types=1);

require_once '../FirstAndLast.php';

use PHPUnit\Framework\TestCase;

class Fixture
{
    function __construct(
        public array $nums,
        public int $target,
        public array $output
    ) { }
}

class FirstAndLastTest extends TestCase
{
    protected array $fixtures;
    protected Solution $solution;

    function __construct() {
        $this->fixtures = [
            new Fixture([5,7,7,8,8,10], 8, [3,4]),
            new Fixture([5,7,7,8,8,10], 6, [-1,-1]),
            new Fixture([], 0, [-1,-1]),
            new Fixture([0], 1, [-1,-1]),
            new Fixture([1], 1, [0,0]),
        ];

        $this->solution = new Solution();
        parent::__construct();
    }

    public function testSolution()
    {
        array_map(function (Fixture $fixture) {
            $this->assertEquals(
               $fixture->output,
               $this->solution->searchRange($fixture->nums, $fixture->target)
            );
        }, $this->fixtures);
    }
}
