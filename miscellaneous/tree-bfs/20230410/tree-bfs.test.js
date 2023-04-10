'use strict';

const { TreeNode, bfs } = require('./tree-bfs');

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

const results = [1, 2, 3, 4, 5, 6, 7]

it('Performs BFS traversal on tree', () => {
    expect(bfs(tree)).toEqual(results);
});