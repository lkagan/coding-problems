'use strict';

const { treeBfs, TreeNode } = require('./tree-bfs');

const head = new TreeNode(1);
head.left = new TreeNode(2);
head.right = new TreeNode(3);
head.left.left = new TreeNode(4);
head.left.right = new TreeNode(5);
head.right.left = new TreeNode(6);
head.right.right = new TreeNode(7);

const result = [1, 2, 3, 4, 5, 6, 7];

it('treeBfs(head)', () => {
    expect(treeBfs(head)).toEqual(result);
});

