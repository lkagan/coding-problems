from tree_bfs import TreeNode, bfs


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.right.left= TreeNode(6)
root.right.right = TreeNode(7)

results = [1,2,3,4,5,6,7]

def test_bfs():
    assert bfs(root) == results