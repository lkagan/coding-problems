<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require __DIR__ . '/graph-bfs.php';

class GraphBfsTest extends TestCase
{
    private array $graph;
    private array $results;

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

    public function test_graph_bfs()
    {
        $this->assertEquals(actual: graphBfs($this->graph), expected: $this->results);
    }
}