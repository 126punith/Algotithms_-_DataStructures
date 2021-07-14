// Example for Recursive fuction.
// const recursiveFactorial = (n) => {
//     if (n === 0) {
//         return 1;
//     } else if (n > 0) {
//         return n * recursiveFactorial(n - 1);
//     }
// }
// console.log(recursiveFactorial(5));
// const iterativeFactorial = (n) => {
//     result = 1;
//     while (n > 0) {
//         result *= n;
//         n -= 1;
//     }
//     return result;
// }
// console.log(iterativeFactorial(5));

const Node = require('./Node');
const LinkedList = require('./LinkedList');

const myList = new LinkedList();

myList.addToHead('Node 1');
myList.addToHead('Node 2');
myList.addToHead('Node 3');
myList.addToHead('Node 4');

// Add checkpoint 2 code below:
const myNodeRecursive = myList.findNodeRecursively('Node 2');
console.log(myNodeRecursive);