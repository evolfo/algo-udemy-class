// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// 2nd solution

function maxChar(str) {
  const obj = {}
  let max = 0
  let maxChar = ''
  
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1
  }

  for (let char in obj) {
  	if (obj[char] > max) {
  	  max = obj[char]
  	  maxChar = char
  	}
  }

  return maxChar
}

// 1st solution:
// function maxChar(str) {
//   const obj = {}
  
//   for (let char of str) {
//     obj[char] = obj[char] + 1 || 1
//   }

//   const sortedValues = Object.values(obj).sort(function(a, b){return b-a})

//   return Object.keys(obj).find(key => {
//   	return obj[key] === sortedValues[0]
//   })
// }

module.exports = maxChar;
