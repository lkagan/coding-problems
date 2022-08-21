<?php
declare(strict_types=1);

require '../utils/utils.php';

class Solution
{
    public function reverseBetween(ListNode $head, int $left, int $right): ListNode
    {
        $pointer = 1;
        $current = $head;
        $seg1Tail = null;
        $leftNode = null;
        $previous = null;
        $next = null;

        while ($pointer <= $left) {
            if ($pointer === $left - 1) {
                $seg1Tail = $current;
            } else if ($pointer === $left) {
                $leftNode = $current;
            }

            $current = $current->next;
            $pointer++;
        }

        $previous = $leftNode;

        while($pointer <= $right) {
            $next = $current->next;
            $current->next = $previous;
            $previous = $current;
            $current = $next;
            $pointer++;
        }

        if ($seg1Tail) {
            $seg1Tail->next = $previous;
        }

        $leftNode->next = $current;

        return $left === 1 ? $previous : $head;
    }
}

class ListNode {
    public function __construct(public $val, public ?ListNode $next=null) {}
}

$node5 = new ListNode(5);
$node4 = new ListNode(4, $node5);
$node3 = new ListNode(3, $node4);
$node2 = new ListNode(2, $node3);
$node1 = new ListNode(1, $node2);
printJson((new Solution())->reverseBetween($node1, 2, 4));