/**
 * Given an array of numbers, write a program to find and print the largest number in the array.
 */

const numbers = [12, 6, 89, 90, 43, 67];
let maxNumber = [0]

for (const num of numbers) {
    if (maxNumber < num) {
        maxNumber = num;
    }
}
console.log(maxNumber);