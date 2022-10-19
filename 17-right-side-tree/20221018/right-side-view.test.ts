import rightSideView, { TreeNode } from "./right-side-view-ts";

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(5);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);

test('rightSideView(tree)', () => {
    expect(rightSideView(tree)).toEqual([1,3,4]);
})