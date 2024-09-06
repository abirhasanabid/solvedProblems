/**
 * Given an object and a key, write a program to check if the object contains that key.
 */

const persons = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
  const keyToCheck = 'age';

  let keys= Object.keys(persons);
  console.log(keys.includes(keyToCheck));