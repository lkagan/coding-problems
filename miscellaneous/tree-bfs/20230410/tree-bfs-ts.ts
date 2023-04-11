function bfs(tree: TreeNode): Array<number> {
    const queue = [tree];
    const values = [];

    while (queue.length) {
        const current = queue.shift();
        if(!current) return values;

        values.push(current.val);

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
    }

    return values;
}

class TreeNode {
    constructor(
        public val: number,
        public left?: TreeNode,
        public right?: TreeNode
    ) { }
}

export { TreeNode, bfs };