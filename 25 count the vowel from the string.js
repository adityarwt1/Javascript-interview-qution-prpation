// Count vowels from a string

const str = "hello world";
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(data) {
    let count = 0;
        for (let char of data.toLowerCase()) {
                if (vowels.includes(char)) {
                            count++;
                                    }
                                        }
                                            return count;
                                            }

                                            console.log(countVowel(str)); // Output: 3