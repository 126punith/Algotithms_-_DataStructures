// import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i = 10000; i >= 1; i--) {
    minHeap.add(i);
}

// remove the minimum value from heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin());