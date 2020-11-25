const assertEqual = function(actual, expected) {
  if( actual === expected) {
    console.log(`Assertion passed : ${actual}  =  ${expected}`) 
  }
  else if(actual !== expected){
    console.log(`Assertion failed : ${actual} != ${expected}`)
  }
  }


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Dee', 'Dee')
assertEqual('Dee', 'Sha')

// var globalScope = 'I\'m all up in your codes!';

// if (false) {
//   let globalScope = 'Not anymore, you\'re not!';
// }
// console.log(globalScope);