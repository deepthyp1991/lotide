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

const without = function(source, itemsToRemove){
  let newArray = [...source]
  for(let i = 0; i < newArray.length; i++){
    if(source[i] === values){
      let removedItem = newArray.indexOf(values)
      newArray.splice(removedItem,1)
    }
  }
  return newArray
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]