<?php

declare(strict_types=1);

class Solution
{
    public function flatten(?Node $head = null)
    {
        $current = $head;

        while ($current) {
            if ($current->child) {
                $tail = $current->child;

                while ($tail->next) {
                    $tail = $tail->next;
                }

                $tail->next = $current->next;
                $tail->next && ($tail->next->prev = $tail);
                $current->next = $current->child;
                $current->next->prev = $current;
                $current->child = null;
            }

            $current = $current->next;
        }

        return $head;
    }
}


class Node
{
    function __construct(
        public ?int $val = 0,
        public ?Node $prev = null,
        public ?Node $next = null,
        public ?Node $child = null,
    )  { }
}