function reverseBetween(head, left, right) {
    if (!head?.next || left === right) {
        return head;
    }

    let pointer = 1;
    let current = head;
    let seg1Tail = null;
    let leftNode = null;
    let previous = null;
    let next = null;

    while (pointer <= left) {
        if (pointer === left - 1) {
            // Get the tail of the first list segment.
            seg1Tail = current;
        } else if (pointer === left) {
            // Remember the left node
            leftNode = current;
        }

        current = current.next;
        pointer++;
    }

    // Pointer === left + 1
    previous = leftNode;

    // Reversal
    while(pointer <= right) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        pointer++;
    }

    // 'previous' node is at the 'right' index.  Set the tail of  the first
    // segment to the 'right' node.
    if (seg1Tail) {
        seg1Tail.next = previous;
    }

    // Connect the leftNode to the node (or null) in position 'right' + 1
    leftNode.next = current;

    // If the head of the list is the first node of the reversal, return the
    // last node of the reversal.  Otherwise, return the original head.
    return left === 1 ? previous : head;
}

console.log(reverseBetween({ val: 3, next: { val: 5, next: null } }, 1, 2));
console.log(reverseBetween({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null}}}} }, 2, 4));
