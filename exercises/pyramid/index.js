// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//		 '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  ' 
//		 ' ####### '
//		 '#########'

function pyramid(n, row = 0, pyra = '') {
	const midPoint = Math.floor((n + (n - 1)) / 2)
	
	if (row === n) {
		return
	}

	if (pyra.length === n * 2 - 1) {
		console.log(pyra)
		return pyramid(n, row + 1)
	}

	if (midPoint - row <= pyra.length && midPoint + row >= pyra.length) {
		pyra += "#"
	} else {
		pyra += " "
	}

	pyramid(n, row, pyra)
}

// solution #1
// function pyramid(n) {
// 	const midPoint = Math.floor((n + (n - 1)) / 2)
// 	for (let row = 0; row < n; row++){
// 		let pyra = ''
// 		for (let column = 0; column < n + (n - 1); column++) {
			
// 			if (midPoint - row <= column && midPoint + row >= column) {
// 				pyra += '#'
// 			} else {
// 				pyra += " "
// 			}
// 		}
// 		console.log(pyra)
// 	}
// }

module.exports = pyramid;
