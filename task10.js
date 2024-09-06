/**
 * Write a program that capitalizes the first letter of each word in a given string.
 */

const luv = 'i love my country';

let split = luv.split(' ');
let result =[];

for (const word of split) {
    console.log(word)
    let upperCaseWord=word[0].toUpperCase()+word.substring(1)
    result.push(upperCaseWord);
    

}


// console.log(result.join(' '));

