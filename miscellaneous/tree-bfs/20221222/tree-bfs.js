'use strict';

exports.treeBfs = (head) => {
    const values = [];
    const queue = [head];
    const seen = new Set();
    seen.add(head.val);

    while (queue.length) {
        const node = queue.shift();
        values.push(node.val);
        node.left && !seen.has(node.left) && queue.push(node.left);
        node.right && !seen.has(node.right) && queue.push(node.right);
    }

    return values;
}

exports.TreeNode = class {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}