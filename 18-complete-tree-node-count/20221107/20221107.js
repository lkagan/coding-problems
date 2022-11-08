'use strict';

function countNodes(root) {
    if (!root) {
        return 0;
    }

    if (!root.next) {
        return 1;
    }

    const height = getHeight(root);
    const topNodesCount = 2 ** (height - 1) - 1;

    // Find the index of the last node
    let left = 0;
    let right = topNodesCount + 1;

    while (left < right) {
        let mid = Math.ceil((right + left) / 2);
        nodeExists(mid, height, root) ? left = mid : right = mid - 1;
    }

    return topNodesCount + left + 1;
}

function getHeight(root) {
    let count = 1;

    while (root.left !== null) {
        ++count;
        root = root.left;
    }

    return count;
}

function nodeExists(idxToFind, height, node) {
    let left = 0;
    let right = 2 ** (height - 1) - 1;
    let count = 0;

    while (count < height) {
        let mid = Math.ceil((left + right) / 2);
        
        if (idxToFind >= mid) {
            node = node.right;
            left = mid;
        } else {
            node = node.left;
            right = mid - 1;
        }

        count++;
    }

    return node !== null;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { TreeNode, countNodes, getHeight }