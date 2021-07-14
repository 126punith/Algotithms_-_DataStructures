const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();
const testList = new DoublyLinkedList();
console.log(testList.printList());
testList.addToHead(9);
console.log(testList.printList());
testList.removeTail();
console.log(testList.printList());
testList.addToTail(8);
console.log(testList.printList());
testList.addToTail(2);
console.log(testList.printList());
console.log(testList);
testList.removeHead();
console.log(testList.printList());
testList.addToTail(4);
console.log(testList.printList());
testList.removeByData(9);
console.log(testList.printList());
testList.removeHead();
console.log(testList.printList());