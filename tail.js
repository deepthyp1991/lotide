const assertEqual = function(actual, expected) {
  if( actual === expected) {
    console.log(`Assertion passed : ${actual}  =  ${expected}`) 
  }
  else if(actual !== expected){
    console.log(`Assertion failed : ${actual} != ${expected}`)
  }
  }

  const tail = function(inputArray) {//removes fist item from array
    let outputArray = [];
    for (let i = 1; i < inputArray.length; i++) {
      outputArray.push(inputArray[i]);
    }
    return outputArray;
  };
console.log(tail(["Hello", "Lighthouse", "Labs"]))
