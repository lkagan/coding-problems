function isValidBST(tree: TreeNode): boolean {
    if (tree === null) return false;

    return isValid(tree, -Infinity, Infinity);
}

function isValid(tree: TreeNode, min: number, max: number): boolean {
    if (tree.val <= min || tree.val >= max) {
        return false;
    }

    if (tree.left !== null && !isValid(tree.left, min, tree.val)) {
        return false;
    } else if (tree.right !== null && !isValid(tree.right, tree.val, max)) {
        return false;
    }

    return true;
}

class TreeNode {
    constructor(public val: number,
                public left: TreeNode | null = null,
                public right: TreeNode | null = null
    ) {}
}

export { isValidBST, TreeNode };
