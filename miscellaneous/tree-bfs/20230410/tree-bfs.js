'use strict';

const bfs = (tree) => {
    const queue = [tree];
    const values = [];

    while (queue.length) {
        const current = queue.shift();
        values.push(current.val);

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
    }

    return values;
}

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { TreeNode,  bfs };