/**
 * Write a program that finds and prints the smallest number in an array of numbers.
 */

const numbers = [2, 6, 5, 45, 7, 43, 7, 51, 4, 63, 3, 5, 6, 1, 454, 45];

let smallNumber = numbers[0];

for (const num of numbers) {
    if (smallNumber > num) {
        smallNumber = num;
    }
}
console.log(smallNumber);