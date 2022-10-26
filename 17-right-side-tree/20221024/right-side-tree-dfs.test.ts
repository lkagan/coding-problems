import rightSideView, { TreeNode } from './right-side-tree-dfs-ts';

const tree = new TreeNode(1);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);
tree.left = new TreeNode(2);
tree.left.right = new TreeNode(5);

it('rightSideView(tree)', () => {
    expect(rightSideView(tree)).toEqual([1,3,4]);
})
