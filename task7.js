/**
 * Write a program that reverses the elements in an array without using the built-in reverse method.
 */

const numbers = [2, 3, 2, 4, 5, 4, 8, 9, 8, 10, 34, 6, 7];

// numbers.reverse();
// console.log(numbers);

let rev = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    rev.push(num);
}
console.log(rev);