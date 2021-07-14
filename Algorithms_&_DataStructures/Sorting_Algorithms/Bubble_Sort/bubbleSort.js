const swap = require('./swap');

const bubbleSort = input => {
    let swapCount = 0
    let swapping = true;
    console.log(`${input} array is `);
    while (swapping) {
        swapping = false;
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                swap(input, i, i + 1)
                swapCount++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped the ${swapCount} times`);
    return input;
};

module.exports = bubbleSort;

//Reverse-sorted array:

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));

// Sorted array:
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));