<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require __DIR__ . '/graph-dfs.php';

class GraphDfsTest extends TestCase
{
    function test_graph_dfs(): void
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

        $results = [0,1,3,4,6,7,5,2,8];

        $this->assertEquals(expected: $results, actual: graphDfs(graph: $graph));
    }
}