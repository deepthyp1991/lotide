const countLetters = function(string){
  const results = {}
  strings = string.split(' ').join("")
  for( let str of strings)
  if(results[str]){
    results[str] += 1
  }
  else{
    results[str] = 1
  }
return results
}

console.log(countLetters('lighthouse in the house'))