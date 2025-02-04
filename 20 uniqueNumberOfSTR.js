/// unique number of string


function findUniqueNumbers(str) {
    const numbers = str.match(/\d+/g);
    
    if (!numbers) return []; // Return empty array if no numbers found
    
    // Convert to numbers and filter unique ones using a Set
    const uniqueNumbers = [...new Set(numbers.map(Number))];

    return uniqueNumbers;
}

// Example Usage
console.log(findUniqueNumbers("abc123def456abc123xyz789456")); 
// Output: [123, 456, 789]
