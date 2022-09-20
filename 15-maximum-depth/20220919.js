function maxDepth(node) {
    if (!node) {
        return 0;
    }

    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
