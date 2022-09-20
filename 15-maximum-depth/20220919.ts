type TreeNode = {
    val: any,
    left: TreeNode | null,
    right: TreeNode | null
}

function maxDepth(node: TreeNode): number  {
    if (!node) {
        return 0;
    }

    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}