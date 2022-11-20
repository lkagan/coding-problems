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
        $this->testCases = [];

        $tree = new TreeNode(2);
        $tree->left = new TreeNode(1);
        $tree->right = new TreeNode(3);
        $this->testCases[] = new SolutionTestCase(tree: clone $tree, valid: true);

        $tree = new TreeNode(5);
        $tree->left = new TreeNode(1);
        $tree->right = new TreeNode(4);
        $tree->right->left = new TreeNode(3);
        $tree->right->right = new TreeNode(6);
        $this->testCases[] = new SolutionTestCase(tree: $tree, valid: false);

        parent::__construct();
    }

    public function test_is_valid_bst()
    {
        array_map(function (SolutionTestCase $testCase) {
            $this->assertEquals(
                expected: $testCase->valid,
                actual: $this->solution->isValidBST($testCase->tree)
            );
        }, $this->testCases);
    }
}

class SolutionTestCase
{
    public function __construct(public TreeNode $tree, public bool $valid) {}
}
