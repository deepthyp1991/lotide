const eqArrays = function(arr1, arr2){
  let result = ''
  for( let i = 0; i < arr1.length; i++){
      if( arr1[i] === arr2[i]){
        result = true
      }
      else if( arr1[i] !== arr2[i]){
        result = false
      }
    }

  return result
}

const assertArraysEqual = function(arr1, arr2){
  const result = eqArrays(arr1,arr2)
  if(!result){
    console.log("There was an issue and array has been altered")
  }
  else{
    console.log("The original array remains intact")
  }
}

console.log(assertArraysEqual(['1','2','3'],['1','2','4']))


 