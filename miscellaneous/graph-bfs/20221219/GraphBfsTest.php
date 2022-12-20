<?php

use PHPUnit\Framework\TestCase;

require __DIR__ . '/graph-bfs.php';

class GraphBfsTest extends TestCase
{
    public function test_graph_bfs(): void
    {
        $graph = [
            [1,3],
            [0],
            [3,8],
            [0,4,5,2],
            [3,6],
            [3],
            [4,7],
            [6],
            [2],
        ];

        $results = [0,1,3,4,5,2,6,8,7];

        $this->assertEquals(expected: $results, actual: graphBfs($graph));
    }
}