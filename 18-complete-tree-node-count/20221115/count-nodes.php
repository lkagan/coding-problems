<?php

declare(strict_types=1);

function countNodes(TreeNode $tree): int
{
    $height = getHeight($tree);
    $left = 0;
    $right = 2 ** ($height - 1) - 1;
    $topNodeCount = $right;

    // Find the last non-null node index.
    while ($left < $right) {
        $mid = (int) ceil(($left + $right) / 2);
        exists(indexToFind: $mid, height: $height, tree: $tree)
            ? $left = $mid : $right = $mid - 1;
    }

    return $topNodeCount + 1 + $left;
}

function exists(int $indexToFind, int $height, TreeNode $tree): bool
{
    $left = 0;
    $right = 2 ** ($height - 1) - 1;

    for ($i = 1; $i < $height; ++$i) {
        $mid = (int) ceil(($left + $right) / 2);

        if ($indexToFind < $mid) {
            $tree = $tree->left;
            $right = $mid - 1;
        } else {
            $tree = $tree->right;
            $left = $mid;
        }
    }

    return $tree !== null;
}

function getHeight(TreeNode $tree): int
{
    $count = 1;

    while ($tree->left) {
        $count++;
        $tree = $tree->left;
    }

    return $count;
}

class TreeNode
{
    function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    ) {}

    function __clone()
    {
        $this->left = $this->left ? clone $this->left : null;
        $this->right= $this->right ? clone $this->right : null;
    }
}
