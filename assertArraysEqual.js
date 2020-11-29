const eqArrays = require('./eqArrays')



const assertArraysEqual = function(arr1, arr2){
  const result = eqArrays(arr1,arr2)
  if(!result){
    console.log("There was an issue and array has been altered")
  }
  else{
    console.log("The original array remains intact")
  }
}

module.exports = assertArraysEqual

// console.log(assertArraysEqual(['1','2','3'],['1','2','3']))
// console.log(assertArraysEqual(['1','2','3'],['1','2','4']))


 