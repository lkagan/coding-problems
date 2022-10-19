'use strict';

const rightSideView = require('./right-side-view');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(5);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);

test('rightSideView', () => {
    expect(rightSideView(tree)).toEqual([1,3,4]);
});
