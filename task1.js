/**
 * Write a program that takes an array of numbers and calculates the sum of all elements in the array.
 */

const numbers =[12,6,89,90,43,67];

let sum = 0;

for(const num of numbers){
    sum+=num;
}
console.log(sum);