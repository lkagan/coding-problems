<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;

require './right-side-view.php';

class RightSideViewTest extends TestCase
{
    private TreeNode $tree;

    function __construct()
    {
        $this->tree = new TreeNode(1);
        $this->tree->left = new TreeNode(2);
        $this->tree->left->right = new TreeNode(5);
        $this->tree->right = new TreeNode(3);
        $this->tree->right->right = new TreeNode(4);

        parent::__construct();
    }

    function test_right_side_view()
    {
        $this->assertSame([1,3,4], (new Solution())->rightSideView($this->tree));
    }
}