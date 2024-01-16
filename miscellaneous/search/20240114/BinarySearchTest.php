<?php

declare(strict_types=1);

require_once __DIR__ . '/../../../vendor/autoload.php';
require_once './binarySearch.php';

use PHPUnit\Framework\TestCase;

class BinarySearchTest extends TestCase
{
    /** @test */
    public function binarySearchGetsIndex()
    {
        $values = [2,5,7,9,11,14,21,22,24,100];
        $this->assertEquals(2, binarySearch($values, 7));
    }
}