from __future__ import annotations
from typing import List, Set


def tree_bfs(tree: TreeNode) -> List[int]:
    values: List[int] = []
    seen: Set[int] = set()
    queue: List[TreeNode] = [tree]

    while (queue):
        current = queue.pop(0)
        values.append(current.val)

        if current.val not in seen:
            seen.add(current.val)
            current.left and queue.append(current.left)
            current.right and queue.append(current.right)

    return values


class TreeNode:
    def __init__(self, val: int, left: TreeNode = None, right: TreeNode = None):
        self.val = val
        self.left = left
        self.right = right
