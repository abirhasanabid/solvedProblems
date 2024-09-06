/**
 * Write a program that counts the occurrences of each character in a given string and prints the results.
 */

const str = 'djhfdfgdfdfkj'; //arry ar pora count 
let count = 0;

for (let i = 0; i < str.length; i++) {
    const newStr = str[i];
    count++
    console.log(newStr, ':', count);
}

// na prle aber