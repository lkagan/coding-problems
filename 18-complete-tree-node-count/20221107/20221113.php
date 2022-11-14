<?php

declare(strict_types=1);

function countNodes(TreeNode $root): int
{
    $height = getHeight($root);

    if ($height === 1) {
        return 1;
    }

    $upperNodeCount = 2 ** ($height - 1) - 1;
    $left = 0;
    $right = 2 ** ($height - 1) - 1;

    while ($left < $right) {
        $mid = (int) ceil(($right + $left) / 2);
        exists(indexToFind: $mid, height: $height, node: $root)
            ? $left = $mid : $right = $mid - 1;
    }

    return $upperNodeCount + $left + 1;
}

function exists(int $indexToFind, int $height, TreeNode $node): bool
{
    $left = 0;
    $right = $height;

    for ($i = 1; $i < $height; ++$i) {
        $mid = ceil(($left + $right) / 2);

        if ($indexToFind < $mid) {
            $node = $node->left;
            $right = $mid - 1;
        } else {
            $node = $node->right;
            $left = $mid;
        }
    }

    return $node !== null;
}

function getHeight(TreeNode $node): int
{
    for ($height = 1; $node->left; ++$height) {
        $node = $node->left;
    }

    return $height;
}

class TreeNode
{
    function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null) { }

    function __clone()
    {
        $this->left = $this->left ? clone $this->left : null;
        $this->right = $this->right ? clone $this->right : null;
    }
}
