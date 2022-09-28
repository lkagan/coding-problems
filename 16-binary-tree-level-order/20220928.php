<?php

declare(strict_types=1);

class TreeNode
{
    public function __construct(
        public int $val = 0,
        public ?TreeNode $left = null,
        public ?TreeNode $right = null,
    ) {
    }
}

class Solution
{
    function levelOrder(?TreeNode $root): array
    {
        if (!$root) {
            return [];
        }
    
        $results = [];
        $queue = [];
        array_push($queue, $root);

        while(count($queue)) {
            $level = [];
            $levelNodeCount = count($queue);

            while (count($level) < $levelNodeCount) {
                $node = array_shift($queue);
                array_push($level, $node->val);
            
                if ($node->left) {
                    array_push($queue, $node->left);
                }

                if ($node->right) {
                    array_push($queue, $node->right);
                }
            }

            array_push($results, $level);
        }

        return $results;
    }
}
