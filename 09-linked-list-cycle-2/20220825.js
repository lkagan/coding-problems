function detectCycle(head) {
    let turtle = head;
    let rabbit = head;
    let intersect = null;

    while (rabbit?.next && !intersect) {
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        if (turtle === rabbit) {
            intersect = turtle;
        }
    }

    if (!intersect) {
        return null;
    }

    while (intersect !== head) {
        intersect = intersect.next;
        head = head.next;
    }

    return head;
}