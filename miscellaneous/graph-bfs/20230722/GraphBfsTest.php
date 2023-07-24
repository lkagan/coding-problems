<?php

use PHPUnit\Framework\TestCase;

require_once './graph-bfs.php';

class GraphBfsTest extends TestCase
{
    private const EXPECTED = [0, 1, 3, 2, 4, 5, 8, 6, 7];
    private const ADJ_LIST = [
        0 => [1, 3],
        1 => [0],
        2 => [3, 8],
        3 => [0, 2, 4, 5],
        4 => [3, 6],
        5 => [3],
        6 => [4, 7],
        7 => [6],
        8 => [2],
    ];

    function test_graph_bfs()
    {
        $this->assertEquals(self::EXPECTED, graphBfs(self::ADJ_LIST));
    }
}
