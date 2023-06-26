'use strict'


// const reverseString = (str) => {
//   return str.split('').reverse().join('');
  
// }

// const result = reverseString('Привет мир!');
// console.log(result);

function reverseStr(str){
  let a = "";
  for (let i = 0; i < str.length; i++){
    a += str[(str.length - 1) - i];
  }
  return a;
}

console.log(reverseStr('Привет мир'));