const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const nextNode = new Node(data);
        const currentHead = this.head;
        this.head = nextNode;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let lastNode = this.head;
        if (!lastNode) {
            this.head = new Node(data);
        } else {
            let temp = this.head;
            while (temp.getNextNode() !== null) {
                temp = temp.getNextNode();
            }
            temp.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        if (removedHead.next) {
            this.head = removedHead.next;
        }
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        output = output.concat("<tail>");
        console.log(output);
    }

    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
        if (currentNode === null) {
            return null;
        } else if (currentNode.data === data) {
            return currentNode;
        } else {
            return this.findNodeRecursively(data, currentNode.next);
        }
    }

}

module.exports = LinkedList;