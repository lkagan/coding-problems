<?php

declare(strict_types=1);

require_once __DIR__ . '/graph-bfs.php';

use PHPUnit\Framework\TestCase;

class GraphBfsTest extends TestCase
{
    protected array $graph;
    protected array $results;

    public function __construct()
    {
        parent::__construct();

        $this->graph = [
            [1, 3],
            [0],
            [3, 8],
            [0, 4, 5, 2],
            [3, 6],
            [3],
            [4, 7],
            [6],
            [2],
        ];

        $this->results = [0, 1, 3, 4, 5, 2, 6, 8, 7];
    }


    public function test_bfs()
    {
        $this->assertEquals(expected: $this->results, actual: bfs($this->graph));
    }
}