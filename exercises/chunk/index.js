// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = []
  let index = 0

  while (index < array.length) {
  	chunked.push(array.slice(index, index + size))
  	index += size
  }

  return chunked
}

module.exports = chunk;

// solution #1
// function chunk(array, size) {
//   const chunks = []
//   for (let i = 0; i < array.length; i += size) {
//   	chunks.push(array.slice(i, i + size))
//   }
//   return chunks
// }

// solution #2
// function chunk(array, size) {
//   const chunked = []

//   for (let item of array) {
//   	let lastChunked = chunked[chunked.length - 1]
//   	if (!lastChunked || lastChunked.length === size) {
//   	  chunked.push([item])
//   	} else {
//   	  lastChunked.push(item)
//   	}
//   }

//   return chunked
// }