<?php

declare(strict_types=1);

class TreeNode
{
    public function __construct(
        public           $val = 0,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    )
    { }
}

class Solution
{
    public function maxDepth(?TreeNode &$node)
    {
        if (!$node) {
            return 0;
        }

        return max(
                $this->maxDepth($node->left),
                $this->maxDepth($node->right)
            ) + 1;
    }
}