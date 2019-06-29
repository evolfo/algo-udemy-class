// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// console.log 

function steps(n) {
	
}

module.exports = steps;


// solution #1

// function steps(n) {
// 	let repeatedString = ''
// 	for (let i = 0; i < n; i++) {
// 		repeatedString = '#'.repeat(i + 1) + ' '.repeat(n - (i + 1))
// 		console.log(repeatedString)
// 	}
// }

// solution #2
// function steps(n) {
// 	for (let row = 0; row < n; row++) {
// 		let stair = ''
// 		for (let column = 0; column < n; column++) {
// 			if (column <= row) {
// 				stair += '#'
// 			} else {
// 				stair += ' '
// 			}
// 		}
// 		console.log(stair)
// 	}
// }

