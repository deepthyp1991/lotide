const letterPosition = function(string){
  const result = {}
 for( let i = 0; i < string.length; i++){
   let letter = string[i]
   if(letter !== ' '){
     if(result[letter]){
       result[letter].push(i)
     }else{
       result[letter] = [i]
     }
   }
 }

  return result

}
console.log(letterPosition("lighthouse in the house"))