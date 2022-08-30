class MyQueue {
    protected left: number[] = [];
    protected right:  number[] = [];

    protected exposeFront(): void {
        while (this.right.length > 0) {
            this.left.push(this.right.pop() || 0);
        }
    }

    protected exposeBack(): void {
        while (this.left.length > 0) {
            this.right.push(this.left.pop() || 0);
        }
    }

    public empty(): boolean {
        return this.left.length === 0 && this.right.length === 0;
    }

    public push(x: number): void {
        this.exposeBack();
        this.left.push(x);
    }

    public pop(): number {
        this.exposeFront();
        return this.left.pop() || 0;
    }

    public peek(): number {
        this.exposeFront();
        return this.left[this.left.length - 1];
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
