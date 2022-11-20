'use strict';

const isValidBST = (tree) => {
    return isValid(tree, -Infinity, Infinity);
}

function isValid(tree, min, max) {
    if (tree.val <= min || tree.val >= max) {
        return false;
    }

    if (tree.left !== null && !isValid(tree.left, min, tree.val)) {
        return false;
    } else if (tree.right !== null && !isValid(tree.right, tree.val, max)) {
        return false;
    }

    return true;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { TreeNode, isValidBST };
