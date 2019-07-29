const object1 = {
  1: 5,
  2: {
    3: 2,
    9: 6,
    'a': {
     2: 'hello world',
     7: 5,
     3: false
    }
  }
};

const object2 = {
  4: 3,
  'foo': {
    0: 9,
    5: 5,
    4: {
      6: ['bar', 7, true],
      1: {
        2: 10
      }
    }
  }
};

function squashObject (obj, sums) {
  if (!sums) { 
    sums = {keys: 0, values: 0}
  }
  
  for (let i in obj) {
    let int = parseInt(i)
    if (typeof (obj[i]) === 'object' && !Array.isArray(obj[i])) {
      squashObject(obj[i], sums)
    } else if (typeof (obj[i]) === 'number' && !isNaN(int)) {
      sums.values += obj[i]
      sums.keys += int
    }
  }
  
  return {[sums.keys]: sums.values};
}



// function squashObject (obj) {
//   computeObject(obj)
//   return {[sums.keys]: sums.values};
// }

// function computeObject(obj) {
//    for (let i in obj) {
//     let int = parseInt(i)
//     if (typeof (obj[i]) === 'object' && !Array.isArray(obj[i])) {
//       computeObject(obj[i])
//     } else if (typeof (obj[i]) === 'number' && !isNaN(int)) {
//       values += obj[i]
//       keys += int
//     }
//   }
//   return [keys, values]
// }



// returns {20: 18}
console.log(squashObject(object1))

// returns {11: 27}
console.log(squashObject(object2))

// This function accepts an object and returns
// an object with a single key-value pair.

// It should search through an object and find
// key-value pairs where both are numbers.

// It should then return an object where the key
// is the sum of all valid keys, and the value is
// the sum of all valid values.