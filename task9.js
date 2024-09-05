/**
 * Given an object and a key, write a program to check if the object contains that key.
 */

const persons = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
  const keyToCheck = 'age';

  for(const person in persons){
    if(keyToCheck.includes(person)){
        console.log('Containes the key');
    }
    else{
        console.log('There is no key')
    }
  }