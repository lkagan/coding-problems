export default (head: TreeNode): Array<number> => {
    const values:number[] = [];
    const queue = [head];
    const seen: Set<TreeNode> = new Set();

    while (queue.length) {
        const node = queue.shift() as TreeNode;
        values.push(node.val);

        if (node.left && !seen.has(node.left)) {
            queue.push(node.left);
            seen.add(node.left);
        }

        if (node.right && !seen.has(node.right)) {
            queue.push(node.right);
            seen.add(node.right);
        }
    }

    return values;
}

export class TreeNode {
    public constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}