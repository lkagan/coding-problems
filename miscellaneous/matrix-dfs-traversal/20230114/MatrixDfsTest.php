<?php

declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require __DIR__ . '/matrix-dfs-stack.php';

class MatrixDfsTest extends TestCase
{
    private array $matrix;
    private array $expected;

    public function __construct()
    {
        parent::__construct();

        $this->matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ];

        $this->expected = [1, 6, 11, 16, 17, 18, 19, 20, 15, 10,
            9, 8, 3, 4, 5, 14, 13, 12, 7, 2];
    }

    public function test_matrix_dfs()
    {
        $this->assertEquals(
            expected: $this->expected,
            actual: matrixDfs($this->matrix)
        );
    }
}