'use strict';

function countNodes(tree) {
    if (!tree) {
        return 0;
    }

    const height = getHeight(tree);

    if (height === 1) {
        return 1;
    }

    const upperCount = 2 ** (height - 1) - 1;
    let left = 0;
    let right = upperCount;

    while (left < right) {
        const mid = Math.ceil((left + right) / 2);
        !exists(mid, height, tree) ? right = mid - 1 : left = mid;
    }

    console.log(upperCount, left);
    return upperCount + left + 1;
}

function exists(indexToFind, height, tree) {
    let level = 1;
    let right = 2 ** (height - 1) - 1;
    let left = 0;

    while (level < height) {
        const mid = Math.ceil((left + right) / 2);

        if (indexToFind >= mid) {
            tree = tree.right;
            left = mid;
        } else {
            tree = tree.left;
            right = mid - 1;
        }

        ++level;
    }

    return tree !== null;
}

function getHeight(tree) {
    let height = 1;

    while (tree.left) {
        ++height;
        tree = tree.left;
    }

    return height;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = {
    TreeNode,
    getHeight,
    countNodes
};
