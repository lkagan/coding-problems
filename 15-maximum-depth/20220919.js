function maxDepth(root) {
    return getDepth(root, 0);
}

function getDepth(node, count) {
    if (!node) {
        return count;
    }

    return Math.max(getDepth(node.left, count), getDepth(node.right, count)) + 1;
}