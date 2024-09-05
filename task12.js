/**
 * Given an array with duplicate elements, write a program to remove the duplicates and return a new array with only unique elements.
 */

const numbers = [2, 3, 2, 4, 5, 4, 8, 9, 8, 10, 34, 6, 7];

let newArray = [];

for (const num of numbers) {
    if (newArray.includes(num)) {
        continue;
    }
    else{
        newArray.push(num);
    }
}
console.log(newArray);