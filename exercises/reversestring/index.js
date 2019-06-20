// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;


//1st solution
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

//2nd solution
// function reverse(str) {
//   let reversed = []
//   for (let i = 0; i < str.length; i++) {
//   	reversed.unshift(str[i])
//   }
//   return reversed.join('')
// }

//3rd solution
// function reverse(str) {
//   let reversed = ''
//   for (let character of str) {
//   	reversed = character + reversed;
//   }
//   return reversed;
// }