const takeUntil = function(array, callback){
  const result = []
  for(let item of array){
    if(!callback(item)){
      result.push(item)
    }else{
      return result
    }

  }
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
const data1 = [1, 2, 5,-1, 7, 2, 7,-1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


