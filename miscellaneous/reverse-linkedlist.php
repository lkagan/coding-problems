<?php

declare(strict_types=1);

require_once '../utils/utils.php';

function reverse(ListNode $head): ListNode
{
    $prev = null;
    $current = $head;

    while ($current) {
        $temp = $current->next;
        $current->next = $prev;
        $prev = $current;
        $current = $temp;
    }

    return $prev;
}

class ListNode
{
   public function __construct(public $data, public ?ListNode $next) {}
}

printJson(reverse(new ListNode( 1, new ListNode(2, new ListNode(3, null)))));