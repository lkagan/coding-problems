import { countNodes, getHeight, TreeNode } from "./20221107-ts";

type TestCase = { root: TreeNode, height: number, count: number};
let testCases: [TestCase];

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
testCases = [{ root, height: 3, count: 6 }];

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
testCases.push({ root, height: 2, count: 3 });

testCases.forEach((testCase, index) => {
    it(`getHeight(testCases[${index}].root)`, () => {
        expect(getHeight(testCase.root)).toEqual(testCase.height);
    });

    it(`countNodes(testCases[${index}].root)`, () => {
        expect(countNodes(testCase.root)).toEqual(testCase.count)
    });
});

