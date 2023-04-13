<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require __DIR__ . '/tree-bfs.php';


class TreeBfsTest extends TestCase
{
    protected TreeNode $tree;
    protected array $values = [1, 2, 3, 4, 5, 6, 7];

    public function __construct()
    {
        parent::__construct();

        $this->tree = new TreeNode(1);
        $this->tree->left = new TreeNode(2);
        $this->tree->right = new TreeNode(3);
        $this->tree->left->left = new TreeNode(4);
        $this->tree->left->right = new TreeNode(5);
        $this->tree->right->left = new TreeNode(6);
        $this->tree->right->right= new TreeNode(7);
    }

    public function test_tree_bfs()
    {
        $this->assertEquals(
            expected: $this->values,
            actual: treeBfs($this->tree),
        );
    }
}