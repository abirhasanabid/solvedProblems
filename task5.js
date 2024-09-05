/**
 * Create an object with properties representing the prices of different items. Write a program to calculate the total cost of all items.
 */

const items = {
    pc: 109000,
    keybord: 4600,
    mouse: 1300,
    headset: 3000,
    ups: 4000,
}
// console.log(items.headset)
let sum = 0;

for (const item in items) {
    const price = items[item];
    sum += price;
}
console.log(sum);