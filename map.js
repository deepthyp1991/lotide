const map = function(array, callback){
  const result = []
  for(let item of array){
    result.push(callback(item))
  }
  return result
}
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

const assertArraysEqual = function(actual, expected){
  const result = eqArrays(actual,expected)
  if(result){
    console.log(`💚 passed : ${actual}  =  ${expected}`)
  }
  else{
    console.log(`⏹ Assertion failed : ${actual} != ${expected}`)
  }
}

//Test code
const words = ['ground', 'control', 'to', 'major', 'tom']
const result1 = map(words, word => word[0])
// assertArraysEqual(result1, ['g', 'c', 't', 'm', '0'])
const number = ['1', '2', '3', '4']
console.log(result1)
const result2 = map(number, num => num *2)
assertArraysEqual(result2, [2,4,6,8])
