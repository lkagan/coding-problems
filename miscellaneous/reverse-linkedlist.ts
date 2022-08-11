function reverse(head: ListNode): ListNode {
    let prev: ListNode = null;
    let current: ListNode = head;

    while (current) {
        let temp: ListNode = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}

type ListNode = {
    data: any,
    next: ListNode
} | null

const node3: ListNode = {data: 3, next: null};
const node2: ListNode = {data: 2, next: node3};
const node1: ListNode = {data: 1, next: node2};

console.log(reverse(node1));