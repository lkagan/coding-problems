class MyQueue {
    #left = [];
    #right = [];

    #exposeFront() {
        while (this.#right.length !== 0) {
            this.#left.push(this.#right.pop());
        }
    }

    #exposeBack() {
        while (this.#left.length !== 0) {
            this.#right.push(this.#left.pop());
        }
    }

    empty() {
        return this.#left.length === 0 && this.#right.length === 0;
    }

    push(x) {
        this.#exposeBack();
        this.#left.push(x);
    }

    pop() {
        this.#exposeFront();
        return this.#left.pop();
    }

    peek() {
        this.#exposeFront();
        return this.#left[this.#left.length - 1];
    }
}

const q = new MyQueue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.pop());
q.push(5);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
