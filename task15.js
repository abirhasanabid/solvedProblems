/**
 * Write a program that calculates the sum of all even numbers in an array.
 */

const numbers = [2, 6, 5, 45, 7, 43, 7, 51, 4, 63, 3, 5, 6, 1, 454, 45];

let sum = 0;

for (const num of numbers) {
    if (num % 2 === 0) {
        sum += num;
    }
}
console.log('the sum', sum);