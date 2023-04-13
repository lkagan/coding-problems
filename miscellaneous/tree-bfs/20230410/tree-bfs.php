<?php

declare(strict_types=1);

function treeBfs(TreeNode $tree): array
{
    $queue = [$tree];
    $values = [];

    while ($queue) {
        $current = array_shift($queue);
        $values[] = $current->val;

        $current->left && $queue[] = $current->left;
        $current->right && $queue[] = $current->right;
    }

    return $values;
}


class TreeNode
{
    public function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    ) {}
}