<?php

declare(strict_types=1);

class TreeNode
{
    function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null
    ) { }
}

class Solution
{
    function rightSideView(TreeNode $root): array
    {
        $queue = [$root];
        $result = [];

        while (count($queue)) {
            $levelLength = count($queue);

            while ($levelLength--) {
                $node = array_shift($queue);
                $node?->left && $queue[] = $node->left;
                $node?->right && $queue[] = $node->right;
            }

            $result[] = $node->val;
        }

        return $result;
    }
}