// Write an implementation of a JS Set (without using ES6 Set or Map directly)
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// const list = new Set([1, 2, 3, 3])
// list.has(1) // return boolean indicating if value exists in Set
// list.add(4) // add new value to set
// list.delete(2) // delete by index
// list.clear() // remove all
// list.values() // [1, 2, 3]

// list.forEach((value, set) => {}, this) // 1, 2, 3
// size property (should be property, not function)
// list.merge(new Set([4, 5, 6])) (merge two Sets together)

class MySet {
  constructor(set) {
    this.set = set;
    this.initialInputHasDuplicates();

    if (typeof set === "undefined") {
      this.set = [];
    }
  }

  has(input) {
    if (this.set.includes(input)) {
      return true;
    }

    return false;
  }

  add(input) {
    if (!this.set.has(input)) {
      this.set.push(input);
      return this.values();
    }

    return false;
  }

  delete(index) {
    if (this.set.has(index)) {
      this.set = this.set.splice(index, index);
      return this.values();
    }

    return false;
  }

  clear() {
    this.set = [];
  }

  values() {
    return this.set;
  }

  initialInputHasDuplicates() {
    for (let i = 0; i < this.set.length; i++) {
      for (let y = i + 1; y < this.set.length; y++) {
        if (this.set[i] === this.set[y]) {
          this.delete(i); // this.set.delete
        }
      }
    }
  }
}

const newSet = new MySet([1, 2, 3, 3]);
console.log(newSet.values());
// newSet.add(1)
// newSet.add(2)
// newSet.add(2)
// newSet.add(4)

// console.log(newSet.has(1)) // True
// console.log(newSet.has(2)) // False
// console.log(newSet.delete(2) // [1, 3]
