const breadthFirstSearch = require('./breadth-first-search');

// Create binary tree
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left= new Node(6);
root.right.right = new Node(7);


// Create expected results
const results = [1,2,3,4,5,6,7];

test('Breadth first search', () => {
    expect(breadthFirstSearch(root)).toEqual(results);
})