 function singleWord(array) {
  const obj = {}
  
  // adding all the words as keys in an object, values are how many times they occur
  for (let word of array) {
    obj[word] = obj[word] + 1 || 1
  }
  
  // iterating through the object to find the word that only happens once
  for (let word in obj) {
    if (obj[word] === 1) {
      return word
    } 
  }
}