from typing import List


class TreeNode:
    def __init__(self, value: int, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def bfs(tree: TreeNode) -> List[int]:
    queue: List[TreeNode] = [tree]
    values: List[int] = []

    while len(queue):
        node = queue.pop(0)
        values.append(node.value)
        node.left and queue.append(node.left)
        node.right and queue.append(node.right)

    return values




