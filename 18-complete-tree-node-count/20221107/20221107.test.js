'use strict';

const { TreeNode, getHeight, countNodes } = require('./20221107');

const root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

it('Tests height', () => {
    expect(getHeight(root)).toBe(3);
})