function flatten(head: NullableNode): NullableNode {
    let current = head;

    while (current) {
        if (current.child) {
            let tail: NullableNode = current.child;

            while(tail.next) {
                tail = tail.next;
            }

            tail.next = current.next;
            tail.next && (tail.next.prev = tail);
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }

        current = current.next;

    }
    return head;
}

type ListNode = {
    val: number,
    next: NullableNode,
    prev: NullableNode,
    child: NullableNode,
}

type NullableNode = ListNode | null;