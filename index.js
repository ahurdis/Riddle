var uniqueRandomArray=require('unique-random-array')
var riddles=require('./riddles.json')
module.exports={
  all:riddles,
  random:uniqueRandomArray(riddles)
};