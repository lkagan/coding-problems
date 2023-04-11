import { TreeNode, bfs } from './tree-bfs-ts'

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

const values = [1, 2, 3, 4, 5, 6, 7];

it('BFS traverses the tree', () => {
    expect(bfs(tree)).toEqual(values);
})