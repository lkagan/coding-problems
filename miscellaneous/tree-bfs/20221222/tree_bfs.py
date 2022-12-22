from __future__ import annotations
from typing import List


def bfs(tree: TreeNode) -> List[int]:
    queue: List[TreeNode] = [tree]
    values: List[int] = []

    while len(queue):
        node = queue.pop(0)
        values.append(node.value)
        node.left and queue.append(node.left)
        node.right and queue.append(node.right)

    return values


class TreeNode:
    value: int
    left: TreeNode
    right: TreeNode

    def __init__(self, value: int, left:TreeNode=None, right:TreeNode=None):
        self.value = value
        self.left = left
        self.right = right
