<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require __DIR__ . '/count-nodes.php';

class CountNodesTest extends TestCase
{
    private array $testCases;

    function __construct()
    {
        $tree = new TreeNode(1);
        $tree->left = new TreeNode(2);
        $tree->right = new TreeNode(3);
        $this->testCases = [new CountNodesTestCase(clone $tree, 2, 3)];

        $tree->left->left = new TreeNode(4);
        $tree->left->right = new TreeNode(5);
        $tree->right->left = new TreeNode(6);
        $this->testCases[] = new CountNodesTestCase($tree, 3, 6);

        parent::__construct();
    }

    function test_get_height()
    {
        array_map(function (CountNodesTestCase $testCase) {
            $this->assertEquals($testCase->height, getHeight($testCase->tree));
        }, $this->testCases);
    }

    function test_count_nodes()
    {
        array_map(function (CountNodesTestCase $testCase) {
            $this->assertEquals($testCase->count, countNodes(tree: $testCase->tree));
        }, $this->testCases);
    }
}

class CountNodesTestCase
{
    function __construct(
        public TreeNode $tree,
        public int $height,
        public int $count
    ) {}
}
