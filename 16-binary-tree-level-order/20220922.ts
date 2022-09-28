type TreeNode = {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function levelOrder(root: TreeNode): number[][] {
    if (!root) return [];

    const results: number[][] = [];
    const queue: TreeNode[] = [];
    queue.push(root);

    while(queue.length) {
        const level: number[] = [];
        let levelNodeCount = queue.length;

        while (level.length < levelNodeCount) {
            let node = queue.shift();
            level.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        results.push(level);
    }

    return results;
}

module.exports = levelOrder;