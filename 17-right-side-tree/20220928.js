function rightSideView(root) {
    if (!root) return [];

    const queue = [root];
    let last = null;
    const results = [];

    while (queue.length) {
        let levelLength = queue.length;

        while (levelLength) {
            const node = queue.shift();
            last = node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            levelLength--;
        }

        results.push(last);
    }

    return results;
}
