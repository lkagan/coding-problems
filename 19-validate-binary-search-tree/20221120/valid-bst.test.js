'use strict';

const { isValidBST, TreeNode } = require('./validate-bst');
const testCases = [];

let tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
testCases.push({ tree: structuredClone(tree), valid: true });

tree = new TreeNode(5);
tree.left = new TreeNode(1);
tree.right = new TreeNode(4);
tree.right.left = new TreeNode(3);
tree.right.right = new TreeNode(6);
testCases.push({ tree, valid: false });

testCases.forEach((testCase, index) => {
    it(`isValidBST(testCases[${ index }])`, () => {
        expect(isValidBST(testCase.tree)).toEqual(testCase.valid);
    });
});


