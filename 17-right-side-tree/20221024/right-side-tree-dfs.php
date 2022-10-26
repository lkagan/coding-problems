<?php

declare(strict_types=1);

class TreeNode
{
    function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    ) {}
}

function rightSideView(TreeNode $node): array
{
    $results = [];
    $level = 0;
    dfs($node, $results, $level);
    return $results;
}

function dfs($node, &$results, $level): void
{
    if ($level === count($results)) {
        $results[] = $node->val;
    }

    $node->right && dfs($node->right, $results, $level + 1);
    $node->left && dfs($node->left, $results, $level + 1);
}