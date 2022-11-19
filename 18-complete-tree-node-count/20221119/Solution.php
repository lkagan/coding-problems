<?php

declare(strict_types=1);

class Solution
{
    public function countNodes(?TreeNode &$node): int
    {
        if (!$node) {
            return 0;
        }

        $height = $this->getHeight(node: $node);
        $topNodeCount = 2 ** ($height - 1) - 1;
        $left = 0;
        $right = $topNodeCount;

        while ($left < $right) {
            $mid = (int) ceil(($left + $right) / 2);
            $this->exists(index: $mid, height: $height, tree: $node)
                ? $left = $mid : $right = $mid - 1;
        }

        return $topNodeCount + $left + 1;
    }

    protected function exists(int $index, int $height, TreeNode $tree): bool
    {
        $left = 0;
        $right = 2 ** ($height - 1 )  - 1;

        for ($i = 1; $i < $height; ++$i) {
            $mid = (int) ceil(($left + $right) / 2);

            if ($index < $mid) {
                $right = $mid - 1;
                $tree = $tree->left;
            } else {
                $left = $mid;
                $tree = $tree->right;
            }
        }

        return $tree !== null;
    }

    public function getHeight(TreeNode $node): int
    {
        for ($height = 1; $node->left; ++$height) {
            $node = $node->left;
        }

        return $height;
    }
}

class TreeNode
{
    public function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null,
    ) {}

    public function __clone()
    {
        $this->left = $this->left ? clone $this->left : null;
        $this->right = $this->right ? clone $this->right : null;
    }
}
