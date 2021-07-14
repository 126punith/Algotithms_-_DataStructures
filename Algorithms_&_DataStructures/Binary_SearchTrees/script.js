const BinaryTree = require('./BinaryTree');
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(randomize());
    bt.insert(numbers[i]);
}
console.log(bt)
console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstTraversal();