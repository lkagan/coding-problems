'use strict';

module.exports = (root) => {
    const queue = [root];
    const results = [];

    while (queue.length) {
        let levelLength = queue.length;
        let node;

        while (levelLength--) {
            node = queue.shift();
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        results.push(node.val);
    }

    return results;
}