const findKeyByValue = function(givenObject, givenValue){
  let output = undefined
  for (let item in givenObject){
    if(givenObject[item] === givenValue){
      output = item
    }
  }
  return output
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue