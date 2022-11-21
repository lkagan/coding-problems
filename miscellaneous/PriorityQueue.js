class PriorityQueue {
    #heap;
    #comparator;

    constructor(comparator = (a,b) => a > b) {
        this.#heap = [];
        this.#comparator = comparator;
    }

    #parentIndexOf(index) {
        return Math.floor((index - 1) / 2);
    }

    #leftChildIndexOf(index) {
        return index * 2 + 1;
    }

    #rightChildIndexOf(index) {
        return index * 2 + 2;
    }

    #selectedChildIndex(index) {
        const leftIndex = this.#leftChildIndexOf(index);
        const rightIndex = this.#rightChildIndexOf(index);
        const hasLeft = this.#heap[leftIndex] !== undefined;
        const hasRight = this.#heap[rightIndex] !== undefined;

        if (hasLeft && hasRight) {
            return this.#compare(leftIndex, rightIndex) ? leftIndex : rightIndex;
        }

        if (hasLeft) {
            return leftIndex;
        }

        if (hasRight) {
            return rightIndex;
        }

        return null;
    }

    #compare(index1, index2) {
        return this.#comparator(this.#heap[index1], this.#heap[index2]);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]]
            = [this.#heap[index2], this.#heap[index1]];
    }

    #siftUp() {
        let current = this.size() - 1;
        let parent = this.#parentIndexOf(current);

        while (current > 0 && this.#compare(current,  parent)) {
            this.#swap(current, parent);
            current = parent;
            const parent = this.#parentIndexOf(current);
        }
    }

    #siftDown() {
        let current = 0;
        let child = this.#selectedChildIndex(current)

        while (current < this.size() && child !== null && this.#compare(child, current)) {
            this.#swap(current, child);
            current = child;
            const child = this.#selectedChildIndex(current);
        }
    }

    size() {
        return this.#heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.#heap[0];
    }

    push(val) {
        this.#heap.push(val);
        this.#siftUp();
        return this.size();
    }

    pop() {
        if (this.size() > 1) {
            this.#swap(0, this.size - 1);
        }

        const top = this.#heap.pop();
        this.#siftDown();
        return top;
    }
}
