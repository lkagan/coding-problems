import { isValidBST, TreeNode } from './valid-bst-ts';

class TestCase {
    constructor(public tree: TreeNode, public valid: boolean) {}
}

const testCases: TestCase[] = [];

let tree = new TreeNode(2);
tree.left = new TreeNode(1);
tree.right = new TreeNode(3);
testCases.push(new TestCase(structuredClone(tree), true));

tree = new TreeNode(5);
tree.left = new TreeNode(1);
tree.right = new TreeNode(4);
tree.right.left = new TreeNode(3);
tree.right.right = new TreeNode(6);
testCases.push(new TestCase(tree, false));

testCases.forEach((testCase, index)  => {
    it(`isValidBST(testCases[${index}])`, () => {
        expect(isValidBST(testCase.tree)).toEqual(testCase.valid);
    });
})
