from tree_bfs import tree_bfs, TreeNode

tree = TreeNode(1)
tree.left = TreeNode(2)
tree.right = TreeNode(3)
tree.left.left = TreeNode(4)
tree.left.right = TreeNode(5)
tree.right.left = TreeNode(6)
tree.right.right = TreeNode(7)

values = [1, 2, 3, 4, 5, 6, 7]


def test_tree_bfs():
    assert tree_bfs(tree) == values
