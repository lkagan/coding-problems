<?php

declare(strict_types=1);

require __DIR__ . '/graph-bfs.php';

use PHPUnit\Framework\TestCase;

class GraphBfsTest extends TestCase
{
    private array $adjList;
    private array $result;

    public function __construct()
    {
        parent::__construct();

        $this->adjList = [
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

        $this->result = [0, 1, 3, 4, 5, 2, 6, 8, 7];
    }

    public function test_graph_bfs()
    {
        $this->assertEquals(
            expected: $this->result,
            actual: graphBfs($this->adjList),
        );
    }
}