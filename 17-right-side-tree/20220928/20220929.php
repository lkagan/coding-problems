<?php

declare(strict_types=1);

class TreeNode
{
    public function __construct(
        public int $val,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null,
    ) {
    }
}

class Solution
{
    public function rightSideView(?TreeNode &$root): array
    {
        if (!$root) {
            return [];
        }

        $queue = [$root];
        $last = null;
        $results = [];

        while (count($queue)) {
            $levelLength = count($queue);

            while ($levelLength) {
                $node = array_shift($queue);
                $last = $node->val;
                $node->left && $queue[] = $node->left;
                $node->right && $queue[] = $node->right;
                $levelLength--;
            }

            $results[] = $last;
        }

        return $results;
    }
}
