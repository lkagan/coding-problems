function breadthFirstSearch(tree) {
    const queue = [];
    const results = [];
    queue.push(tree);

    while (queue.length) {
        const node = queue.shift();
        results.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }

    return results;
}

module.exports = breadthFirstSearch;