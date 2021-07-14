class MinHeap {
    constructor() {
        this.heap = [null];
        this.size = 0;
    }

    popMin() {
        if (this.size === 0) {
            return null
        }
        const min = this.heap[1];
        this.heap[1] = this.heap[this.size];
        this.heap.pop();
        this.size--;
        this.heapify();
        return min;
    }

    add(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    }

    bubbleUp() {
        let current = this.size;
        let swapCount = 0;
        while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
            this.swap(current, getParent(current));
            current = getParent(current);
            swapCount++;
        }
        if (this.size == 10000) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }

    heapify() {
        let current = 1;
        let leftChild = getLeft(current);
        let rightChild = getRight(current);
        let swapCount = 0;

        while (this.canSwap(current, leftChild, rightChild)) {
            // Only compare left & right if they both exist
            if (this.exists(leftChild) && this.exists(rightChild)) {

                // Make sure to swap with the smaller of the two children
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                    swapCount++;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                    swapCount++;
                }
            } else {
                // If only one child exist, always swap with the left
                this.swap(current, leftChild);
                current = leftChild;
                swapCount++;
            }
            leftChild = getLeft(current);
            rightChild = getRight(current);

        }
        if (this.size == 9999) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }

    exists(index) {
        return index <= this.size;
    }

    canSwap(current, leftChild, rightChild) {
        // Check that one of the possible swap conditions exists
        return (
            this.exists(leftChild) && this.heap[current] > this.heap[leftChild] ||
            this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
        );
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

}

const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;

module.exports = MinHeap;