import Node from './Node';

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
        this.head = removedHead.getNextNode();
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
}

export default LinkedList;