'use strict';

const rightSideView = require('./right-side-tree-dfs');

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left || null;
        this.right = right || null;
    }
}

const head = new TreeNode(1);
head.left = new TreeNode(2);
head.left.right = new TreeNode(5);
head.right = new TreeNode(3);
head.right.right = new TreeNode(4);

it('rightSideView($head)', () => {
    expect(rightSideView(head)).toEqual([1,3,4]);
})