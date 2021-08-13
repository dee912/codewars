function solution(number){
  // this is the value we will add the mutiples of 3 and 5 to
  let sum = 0
  // run loop through all numbers
  for (let i = 1; i < number; i++) {
    // add a condition to on pull out multiples of 3 and 5
    if (i % 3 === 0 || i % 5 === 0) {
      // the multiples will then be added to our sum variable
      sum += i
    }
  }
  // always return or the sum won't work
  return sum
}