const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const nextNode = new Node(value);
        const currentHead = this.head;
        this.head = nextNode;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(value) {
        let lastNode = this.head;
        if (!lastNode) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            while (temp.getNextNode() !== null) {
                temp = temp.getNextNode();
            }
            temp.setNextNode(new Node(value));
        }
    }

    findNodeIteratively(comparator) {
        let current = this.head;

        while (current) {
            if (comparator(current.value)) {
                return current;
            }
            current = current.getNextNode();
        }
        return null;
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) return;

        if (removedHead.next) {
            this.head = removedHead.next;
        }
        return removedHead.data;
    }

    get size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}

module.exports = LinkedList;