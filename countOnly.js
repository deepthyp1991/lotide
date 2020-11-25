const assertEqual = function(actual, expected) {
  if( actual === expected) {
    console.log(`Assertion passed : ${actual}  =  ${expected}`) 
  }
  else if(actual !== expected){
    console.log(`Assertion failed : ${actual} != ${expected}`)
  }
  }
  const countOnly = function(allItems, itemsToCount){
    const results = {}
    for (const item of allItems) {
      if(itemsToCount[item]){
        if(results[item]){
          results[item] += 1
        }else{
          results[item] = 1
        }
      }
    }
return results;
  }
  console.log(countOnly(['a','a','b','c','d','e','a'], {a:true, d:true, b:false, f: true}))