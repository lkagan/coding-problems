<?php

declare(strict_types=1);

class Solution
{
    public function isValidBST(TreeNode $tree): bool {
        return $this->isValid(tree: $tree, min: -INF, max: INF);
    }

    private function isValid(TreeNode $tree, float $min, float $max): bool
    {
        if ($tree->val <= $min || $tree->val >= $max) {
            return false;
        }

        if ($tree->left !== null && !$this->isValid(tree: $tree->left, min: $min, max: $tree->val)) {
            return false;
        } else if ($tree->right !== null && !$this->isValid(tree: $tree->right, min: $tree->val, max: $max)) {
            return false;
        }

        return true;
    }
}

class TreeNode
{
    public function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    ) {}

    public function __clone()
    {
        $this->left ? clone $this->left : null;
        $this->right ? clone $this->right : null;
    }
}
