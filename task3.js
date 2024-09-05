/**
 * Write a program that counts how many vowels (a, e, i, o, u) are present in a given string.
 */

const str = 'dfdcnofewruvkdsf';

const vowels = 'aeiouAEIOU';
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++
    }
}
console.log(count);