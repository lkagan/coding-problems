'use strict';

const rightSideView = (tree) => {
    const results = [];
    let level = 0;
    depthFirstSearch(tree, results, level);
    return results;
}

const depthFirstSearch = (node, results, level) => {
    if (results.length === level) {
        results.push(node.val);
    }

    node.right && depthFirstSearch(node.right, results, level + 1);
    node.left && depthFirstSearch(node.left, results, level + 1);
}

module.exports = rightSideView;