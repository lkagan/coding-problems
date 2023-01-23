<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/MatrixBfs.php';

class MatrixBfsTest extends TestCase
{
    private array $matrix;
    private array $results;

    public function __construct()
    {
        parent::__construct();

        $this->matrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

        $this->results = [1, 2, 5, 3, 6, 9, 4, 7, 10, 13, 8, 11, 14, 12, 15, 16];
    }

    public function test_matrix_bfs()
    {
        $this->assertEquals(
            expected: $this->results,
            actual: (new MatrixBfs)->matrixBfs($this->matrix)
        );
    }
}