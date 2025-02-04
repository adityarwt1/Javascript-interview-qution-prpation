/// check the str lenght if contain 8 character

function strcheck(str){
    return str.length === 8
}

console.log(strcheck("JavaScript")); // false (10 characters)
console.log(strcheck("Computer"));   // true (8 characters)
console.log(strcheck("Code1234"));   // true (8 characters)
console.log(strcheck("Hello"));      // false (5 characters)

