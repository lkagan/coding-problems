export class TreeNode {
    constructor(
        public val: number,
        public left?: TreeNode,
        public right?: TreeNode,
    ) { }
}

export default (root: TreeNode): number[] => {
    const results: number[] = [];
    let level = 0;
    dfs(root, results, level);
    return results;
}

const dfs = (node: TreeNode, results: number[], level: number): void => {
    if (results.length === level) {
        results.push(node.val);
    }

    node.right && dfs(node.right, results, level + 1);
    node.left && dfs(node.left , results, level + 1);
}