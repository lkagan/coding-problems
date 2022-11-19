<?php

declare(strict_types=1);
use PHPUnit\Framework\TestCase;
require __DIR__ . '/Solution.php';

class SolutionTest extends TestCase
{
    private array $testCases;
    private Solution $solution;

    public function __construct()
    {
        $this->solution = new Solution();

        $tree = new TreeNode(1);
        $tree->left = new TreeNode(2);
        $tree->right = new TreeNode(3);
        $this->testCases = [new SolutionTestCase(
            tree: clone $tree,
            height: 2,
            count: 3)];

        $tree->left->left = new TreeNode(4);
        $tree->left->right= new TreeNode(5);
        $tree->right->left= new TreeNode(6);
        $this->testCases[] = new SolutionTestCase(tree: $tree, height: 3, count: 6);

        parent::__construct();
    }

    public function test_get_height()
    {
        array_map(function (SolutionTestCase $testCase): void {
            $this->assertEquals(
                expected: $testCase->height,
                actual: $this->solution->getHeight($testCase->tree)
            );
        }, $this->testCases);
    }

    public function test_count_nodes()
    {
        array_map(function (SolutionTestCase $testCase): void {
            $this->assertEquals(
                expected: $testCase->count,
                actual: $this->solution->countNodes($testCase->tree)
            );
        }, $this->testCases);
    }
}

class SolutionTestCase
{
    public function __construct(
        public TreeNode $tree,
        public int $height,
        public int $count,
    ) {}
}
