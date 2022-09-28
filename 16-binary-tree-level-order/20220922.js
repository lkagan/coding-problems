function levelOrder(root) {
    if (!root) return [];

    const results = [];
    const queue = [];
    queue.push(root);

    while(queue.length) {
        let level = [];
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