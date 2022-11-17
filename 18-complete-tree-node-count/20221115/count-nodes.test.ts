import { TreeNode, countNodes, getHeight } from './count-nodes-ts';

type TestCase = {
    tree: TreeNode,
    height: number,
    count: number
};

let testCases: TestCase[] = [];

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
testCases.push({ tree: structuredClone(tree), height: 2, count: 3 });

tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
testCases.push({ tree, height: 3, count: 5 });

testCases.forEach((testCase, index) => {
    it(`getHeight(testCases[${index}])`, () => {
        expect(getHeight(testCase.tree)).toEqual(testCase.height);
    });

    it(`countNodes(testCases[${index}])`, () => {
        expect(countNodes(testCase.tree)).toEqual(testCase.count);
    });
});
