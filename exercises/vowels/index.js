// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// g makes sure we don't stop at the first letter
// i will automatically take care of upper/lowercase

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi)

//   if (matches) {
//   	return matches.length
//   }
//   return 0
// }

module.exports = vowels;


// 1st Solution
function vowels(str) {
	const vwls = ['a', 'e', 'i', 'o', 'u', 'A', "E", "I", "O", "U"]
	let count = 0

	for (let i = 0; i < str.length; i++) {
		if (vwls.includes(str[i])) {
			count++
		}
	}
	return count
}

// 2nd solution
// function vowels(str) {
//   if (str.toLowerCase().match(/[aeiou]/g)) {
// 	return str.toLowerCase().match(/[aeiou]/g).length
//   }
//   return 0
// }