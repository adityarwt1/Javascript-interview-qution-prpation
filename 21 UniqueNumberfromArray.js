/// find unique number from array

function findUniqueNumbers(arr) {
    return [...new Set(arr)];
}

// Example Usage
console.log(findUniqueNumbers([1, 2, 3, 2, 4, 5, 1, 6])); 
// Output: [1, 2, 3, 4, 5, 6]
