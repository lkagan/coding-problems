<?php

declare(strict_types=1);

require '../utils/utils.php';

class Solution
{
    public function detectCycle(?ListNode $head): ?ListNode
    {
        $turtle = $rabbit = $head;
        $intersect = null;

        while($rabbit?->next && !$intersect) {
            $turtle = $turtle->next;
            $rabbit = $rabbit->next->next;

            if ($turtle === $rabbit) {
                $intersect = $turtle;
            }
        }

        if (!$intersect) {
            return null;
        }

        while ($intersect !== $head) {
            $intersect = $intersect->next;
            $head = $head->next;
        }

        return $head;
    }
}

class ListNode
{
    public function __construct(
        public int $val,
        public ?ListNode $next
    ) {}
}

// Build linked list.
$vals = [-1,-7,7,-4,19,6,-9,-5,-2,-5];

$counter = 1;

$current = null;
$next    = null;
$nodes   = [];

for($i = count($vals) - 1; $i >= 0; $i--) {
    $current = new ListNode($vals[$i], $next);
    $next = $current;
    $nodes[] = $current;

    if ($i === count($vals) - 1) {
        $current->next = $current;
    }
}


printJson((new Solution())->detectCycle($current));