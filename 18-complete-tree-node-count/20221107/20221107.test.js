'use strict';

const { TreeNode, getHeight, countNodes } = require('./20221107');

let root = new TreeNode(1);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const testCases = [{root, count: 6}];

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

testCases.push({root, count: 3});

it('Tests height', () => {
    expect(getHeight(testCases[0].root)).toBe(2);
});


testCases.forEach(testCase => {
    it(`countNodes(root) equals ${testCase.count}`, () => {
        expect(countNodes(testCase.root)).toBe(testCase.count);
    });
})
