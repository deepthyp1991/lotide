//index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPosition = require('./letterPosition')


module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  findKey,
  findKeyByValue,
  letterPosition
}