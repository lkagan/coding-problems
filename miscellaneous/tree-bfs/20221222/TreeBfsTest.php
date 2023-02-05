<?php

declare(strict_types=1);

require __DIR__ . '/tree-bfs.php';
use PHPUnit\Framework\TestCase;

class TreeBfsTest extends TestCase
{
    private TreeNode $tree;
    private array $result;

    public function __construct()
    {
        parent::__construct();

        $this->tree = new TreeNode(1);
        $this->tree->left = new TreeNode(2);
        $this->tree->right = new TreeNode(3);
        $this->tree->left->left = new TreeNode(4);
        $this->tree->left->right = new TreeNode(5);
        $this->tree->right->left = new TreeNode(6);
        $this->tree->right->right = new TreeNode(7);

        $this->result = [1, 2, 3, 4, 5, 6, 7];
    }

    public function test_tree_bfs()
    {
        $this->assertEquals(expected: $this->result, actual: treeBfs($this->tree));
    }
}