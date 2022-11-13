function countNodes(root: TreeNode): number {
    const height = getHeight(root);
    let right = 2 ** (height - 1) - 1;
    const upperNodeCount = right;
    let left = 0;

    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        exists(mid, root, height) ? left = mid : right = mid - 1;
    }

    return upperNodeCount + left + 1;
}

function getHeight(node: TreeNode): number {
    let count = 1;

    while (node.left) {
        count++;
        node = node.left;
    }

    return count;
}

function exists(indexToFind: number, root: TreeNode, height: number): boolean {
    let left = 0;
    let right = (height - 1) **  2 - 1;
    let node: TreeNode | null = root;

    for(let i = 1; i < height; ++i) {
        let mid = Math.ceil((left + right) / 2);

        if (indexToFind >= mid) {
            node = node.right!;
            left = mid;
        } else {
            node = node.left!;
            right = mid - 1;
        }
    }

    return node !== null;
}

class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null) {
    }
}

export { countNodes, TreeNode, getHeight }
