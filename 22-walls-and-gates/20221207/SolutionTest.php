<?php

declare(strict_types=1);
require __DIR__ . '/Solution.php';
use PHPUnit\Framework\TestCase;

class SolutionTest extends TestCase
{
    private array $io;

    public function __construct()
    {
        parent::__construct();

        $this->io = [
            new SolutionIO([[-1]], [[-1]]),
            new SolutionIO([
                [INF,-1,0,INF],
                [INF,INF,INF,-1],
                [INF,-1,INF,-1],
                [0,-1,INF,INF]
            ], [
                [3,-1,0,1],
                [2,2,1,-1],
                [1,-1,2,-1],
                [0,-1,3,4]
            ])
        ];
    }

    public function test_walls_and_gates(): void
    {
        foreach ($this->io as $io) {
            $this->assertEquals($io->expected, (new Solution())->wallsAndGates($io->input));
        }
    }
}

class SolutionIO
{
    public function __construct(public array $input, public array $expected) {}
}