const levelOrder = require('./20220922.js');

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const tree = new Node(3);
tree.left = new Node(9);
tree.right = new Node(20);
tree.right.left = new Node(15);
tree.right.right = new Node(7);

it('Displays binary tree in level order', () => {
    expect(levelOrder(tree)).toEqual([[3],[9,20],[15,7]]);
});