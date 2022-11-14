<?php

declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require __DIR__ . '/20221113.php';

class CountNodesTest extends TestCase
{
    private array $testCases = [];

    function __construct()
    {
        $tree = new TreeNode(1);
        $tree->left = new TreeNode(2);
        $tree->right = new TreeNode(3);
        $this->testCases[] = new TestData(root: clone $tree, height: 2, count: 3);

        $tree->left->left = new TreeNode(4);
        $tree->left->right = new TreeNode(5);
        $tree->right->left = new TreeNode(6);
        $this->testCases[] = new TestData(root: $tree, height: 3, count: 6);

        parent::__construct();
    }

    function test_get_height()
    {
        array_map(function (TestData $testCase) {
            $this->assertEquals(
                expected: $testCase->height,
                actual: getHeight($testCase->root)
            );
        }, $this->testCases);
    }

    function test_count_nodes()
    {
        array_map(function (TestData $testCase) {
            $this->assertEquals(
                expected: $testCase->count,
                actual: countNodes(root: $testCase->root)
            );
        }, $this->testCases);
    }
}

class TestData
{
    function __construct(
        public TreeNode $root,
        public int $height,
        public int $count
    ) {}
}
