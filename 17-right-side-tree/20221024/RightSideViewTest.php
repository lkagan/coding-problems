<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require './right-side-tree-dfs.php';

class RightSideViewTest extends TestCase
{
    private TreeNode $root;

    function __construct()
    {
        $this->root = new TreeNode(1);
        $this->root->right = new TreeNode(3);
        $this->root->right->right = new TreeNode(4);
        $this->root->left = new TreeNode(2);
        $this->root->left->right = new TreeNode(5);

        parent::__construct();
    }

    function test_right_side_view()
    {
        $this->assertEquals([1,3,4], rightSideView($this->root));
    }
}