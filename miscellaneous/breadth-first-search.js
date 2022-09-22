function breadthFirstSearch(tree) {
    const cache = [];
    const results = [];
    cache.push(tree);

    while (cache.length) {
        const node = cache.shift();
        results.push(node.value);
        node.left && cache.push(node.left);
        node.right && cache.push(node.right);
    }

    return results;
}

module.exports = breadthFirstSearch;