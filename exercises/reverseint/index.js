// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(n.toString().split('').reduce((rev, num) => num + rev, '')) * Math.sign(n)
}

module.exports = reverseInt;


// 1st solution
// function reverseInt(n) {
//   if (n < 0) {
//   	let reversedNum = '-' + (n).toString().split('').reverse().join('')
//   	return parseInt(reversedNum)
//   }

//   return parseInt((n).toString().split('').reverse().join(''))
// }

// 2nd solution 
// function reverseInt(n) {
//   if (n < 0) {
//   	reversedNum = '-' + n.toString().split('').reduce((rev, num) => num + rev, '')
//   	return parseInt(reversedNum)
//   }
//   return parseInt(n.toString().split('').reduce((rev, num) => num + rev, ''))
// }
