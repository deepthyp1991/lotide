const middle = function(arr){
  let value = ''
  let newValue = []
  let theMiddle = ''
  if(arr.length <= 2){
    return  newValue
  }

  
  else if(arr.length > 2){

    if (arr.length%2===0)
   {let avg = (arr[(arr.length/2)-1].toString() + ','+ arr[arr.length/2]. toString()) 
   return [avg]
   }
    else 
    {theMiddle = Math.floor(arr.length/2)
    value= arr[theMiddle] 
  }
  }
return [value] 
}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3, 4]))// => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1,2,3,4,5,6,7,8,9]))
console.log(middle([1, 2, 3, 4, 5, 6, 7,8,9,10]))
