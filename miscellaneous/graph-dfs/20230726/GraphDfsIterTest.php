<?php

use PHPUnit\Framework\TestCase;

require_once './graph-dfs-iter.php';

class GraphDfsIterTest extends TestCase
{
    public function test_dfs()
    {
        $adjList = [
            [1, 3],
            [0],
            [3, 8],
            [0, 2, 4, 5],
            [3, 6],
            [3],
            [4, 7],
            [6],
            [2],
        ];

        $expected = [0, 3, 5, 4, 6, 7, 2, 8, 1];

        $this->assertEquals(expected: $expected, actual: dfs($adjList, 0));
    }
}