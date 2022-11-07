'use strict';

function countNodes(root) {
    if (root.next === null) {
        return 1;
    }

    const height = getHeight(root);
    // Get height
    // Get number of nodes in all but last level
    // Get number of nodes in last level
    // Add last level to all levels above
    // Return
}

function getHeight(root) {
    let count = 1;

    while (root.left !== null) {
        ++count;
        root = root.left;
    }

    return count;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { TreeNode, countNodes, getHeight }