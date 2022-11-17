'use strict';

class TestCase {
    constructor(tree, height, count) {
        this.tree = tree;
        this.height = height;
        this.count = count;
    }
}

const { countNodes, TreeNode, getHeight } = require('./countNodes');
const testCases = [];

let tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
testCases.push(new TestCase(tree, 2, 3));

tree = structuredClone(tree);
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.right.left = new TreeNode(6);
testCases.push(new TestCase(tree, 3, 6));

testCases.forEach((testCase, index) => {
    it(`getHeight(testCases[${index}].tree)`, () => {
        expect(getHeight(testCase.tree)).toEqual(testCase.height);
    });

    it(`countNodes(testCases[${index}].tree)`, () => {
        expect(countNodes(testCase.tree)).toEqual(testCase.count);
    });
});
