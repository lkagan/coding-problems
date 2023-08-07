<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require_once './graph-dfs-rec.php';

class GraphDfsRecTest extends TestCase
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

        $expected = [0, 1, 3, 2, 8, 4, 6, 7, 5];

        $this->assertEquals($expected, dfs($adjList, 0));

    }
}