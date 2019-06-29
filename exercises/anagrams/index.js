// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// solution 1 
// function anagrams(stringA, stringB) {
// 	const str1 = stringA.replace(/[^\w]/g, "").toLowerCase()
// 	const str2 = stringB.replace(/[^\w]/g, "").toLowerCase()

// 	const obj1 = {}
// 	const obj2 = {}

// 	for (let char of str1) {
// 		obj1[char] = obj1[char] + 1 || 1
// 	}

// 	for (let char of str2) {
// 		obj2[char] = obj2[char] + 1 || 1
// 	}

// 	if (Object.keys(obj1).length === Object.keys(obj2).length) {
// 		const keys1 = Object.keys(obj1).sort().join('')
// 		const keys2 = Object.keys(obj2).sort().join('')
// 		const values1 = Object.values(obj1).sort().join('')
// 		const values2 = Object.values(obj2).sort().join('')
// 		if (keys1 === keys2 && values1 === values2) {
// 			return true 
// 		} else {
// 			return false
// 		}
// 	}
// }

// solution 2
// function anagrams(stringA, stringB) {
// 	const charMapA = buildCharMap(stringA)
// 	const charMapB = buildCharMap(stringB)

// 	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false
// 	}

// 	for (let char in charMapA) {
// 		if (charMapA[char] !== charMapB[char]) {
// 			return false
// 		}
// 	}
// 	return true
// }

// function buildCharMap(str) {
// 	const charMap = {}

// 	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1
// 	}

// 	return charMap
// }

module.exports = anagrams;
