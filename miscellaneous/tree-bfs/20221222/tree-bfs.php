<?php

declare(strict_types=1);

function treeBfs(TreeNode $head): array
{
    $values = [];
    $queue = [$head];
    $seen[serialize($head->val)] = true;

    while ($queue) {
        $node = array_shift($queue);
        $values[] = $node->val;
        $node->left?->val && !array_key_exists(serialize($node->left->val), $seen)
            && $queue[] = $node->left;
        $node->right?->val && !array_key_exists(serialize($node->right->val), $seen)
            && $queue[] = $node->right;
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