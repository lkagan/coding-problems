function flatten(head) {
    let current = head;

    while(current) {
        if (current.child) {
            let tail = current.child;

            while (tail.next) {
                tail = tail.next;
            }

            // Connect the tail
            tail.next = current.next;
            tail.next && (tail.next.prev = tail);

            // Connect the child
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }

        current = current.next
    }

    return head;
}