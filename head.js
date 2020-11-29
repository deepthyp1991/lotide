
// const assertEqual = require('./assertEqual');
const head = function(array) {
  var firstElement = array.slice(0,1).shift()
  return firstElement
}

module.exports = head