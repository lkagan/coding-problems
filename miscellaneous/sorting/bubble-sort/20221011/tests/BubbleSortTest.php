<?php

declare(strict_types=1);

require '../bubble-sort.php';

use PHPUnit\Framework\TestCase;

class BubbleSortTest extends TestCase
{
    private array $inputs;

    function __construct()
    {
        $this->inputs = [
            [],
            [1],
            [2, 1],
            [4, 1, 3, 2, 5]
        ];

        parent::__construct();
    }

    function test_sorts_array()
    {
        array_walk($this->inputs, function ($input) {
            $sorted = $input;
            sort($sorted);
            $this->assertEquals($sorted, bubbleSort($input));
        });
    }
}