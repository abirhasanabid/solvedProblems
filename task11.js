/**
 * Write a program that calculates the average value of numbers in an array.
 */

const numbers = [2, 6, 5, 45, 7, 43, 7, 51, 4, 63, 3, 5, 6, 1, 454, 45];

let sum = 0;
let x = numbers.length
let avg;

for (const num of numbers) {
    sum += num;
}
avg = sum / x;
// console.log(Number(avg.toFixed(2)));
console.log(avg);

