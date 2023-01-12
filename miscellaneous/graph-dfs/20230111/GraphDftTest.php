<?php

declare(strict_types=1);
require __DIR__ . '/graph-dft-stack.php';
use PHPUnit\Framework\TestCase;

class GraphDftTest extends TestCase
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
            [0, 2, 4, 5],
            [3, 6],
            [3],
            [4, 7],
            [6],
            [2],
        ];

        $this->results = [0, 3, 5, 4, 6, 7, 2, 8, 1];
    }

    public function test_graph_dft()
    {
        $this->assertEquals(
            expected: $this->results,
            actual: graphDft($this->graph),
        );
    }
}