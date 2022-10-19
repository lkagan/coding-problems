export default (head: TreeNode): number[] => {
    const result: number[] = [];
    const queue: TreeNode[] = [head];

    while (queue.length) {
        let levelLength = queue.length;
        let node: TreeNode | undefined;

        while (levelLength--) {
            node = queue.shift()!;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        node && result.push(node.val);
    }

    return result;
}

export class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) { }
}