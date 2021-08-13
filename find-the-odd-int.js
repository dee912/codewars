function findOdd(arr) {
  // create an object that will check if a number has appeared before
  let odd = {}
  // run a loop through all the array values
  for (i = 0; i < arr.length; i++) {
    // create a condition stating if a value has appear in the odd object add 1 to the total amount of times it's appeared
    if (odd[arr[i]]) {
      odd[arr[i]]++
    } else {
      // if a number hasn't appeared before that means it a new number so well equal it to 1 and wait to see if the same value appears
      odd[arr[i]] = 1
    }
  }
  
  // run a loop through the key value's and if key value % 2 doesn't = 0 return the number that has appeared an odd number of times
  //! convert to a number as values in key value pair will return a string
  for (let key in odd) {
    if (odd[key] % 2 !== 0) {
      return Number(key)
    }
  }
}