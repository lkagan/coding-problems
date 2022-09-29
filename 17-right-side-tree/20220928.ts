interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const queue = [root];
    let last: number = null;
    const results: number[] = [];

    while (queue.length) {
        let levelLength = queue.length;

        while (levelLength) {
            const node: TreeNode = queue.shift();
            last = node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            levelLength--;
        }

        results.push(last);
    }

    return results;
}
