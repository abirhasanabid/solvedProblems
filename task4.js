/**
 * Write a program that checks whether a given string is a palindrome (reads the same forward and backward).
 */

const str = 'madam';

const  revStr = str.split('').reverse().join('')

if(str === revStr){
    console.log('The string is a palindrome')
}else{
    console.log('The string is not a palindrome');
}

// for(let i =0;i<str.length;i++){
//     console.log(str[i])
// }