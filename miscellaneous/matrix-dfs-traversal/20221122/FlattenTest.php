<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
require __DIR__ . '/20221123.php';

class FlattenTest extends TestCase
{
    private array $matrix;
    private array $results;

    public function __construct()
    {
        parent::__construct();

        $this->matrix = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ];

        $this->results = [1,2,3,4,5,10,15,20,19,14,9,8,13,18,17,12,7,6,11,16];
    }

    public function test_flatten()
    {
        $this->assertEquals(expected: $this->results, actual: flatten($this->matrix));
    }
}
