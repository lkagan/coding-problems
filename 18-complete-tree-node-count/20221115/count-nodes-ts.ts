function countNodes(head: TreeNode): number {
    if (head.left === null) {
        return 1;
    }

    const height = getHeight(head);
    const topCount = 2 ** (height - 1) - 1;
    let left = 0;
    let right = topCount;

    // Find the last node that exists.
    while (left < right) {
        const mid = Math.ceil((left + right) / 2);
        exists(mid, head, height) ? left = mid : right = mid - 1;
    }

    return left + topCount + 1;
}

function exists(indexToFind: number, tree: TreeNode, height: number): boolean {
    let node: TreeNode | null = tree;
    let left = 0;
    let right = 2 ** (height - 1) - 1;

    for (let i = 1; i < height; ++i) {
        const mid = Math.ceil((left + right) / 2);

        if (indexToFind >= mid) {
            left = mid;
            node = node.right!;
        } else {
            right = mid - 1
            node = node.left!;
        }
    }

    return node !== null;
}

function getHeight(tree: TreeNode): number {
    let height = 1;

    while (tree.left) {
        ++height;
        tree = tree.left;
    }

    return height;
}

class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

export { TreeNode, countNodes, getHeight };
