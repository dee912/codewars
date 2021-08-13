function digital_root(n) {

  // 1. condtion saying if n is less than 10 return n as and single digit is the final answer

  // 2. else continue reducing like so
  // 2.1. Change n into a string so we can create an array 
  // 2.2. Split the string(n) into an array so we have each number seperate

  // 3. reduce will be used in that it will accumulate the values
  // 3.1. we want the accumulation value + the next value 
  // 3.2. the + infront of currentValue changes the stingified number back into a numbuer allowing for addition
  // 3.3. we will intialise the accumulator at 0 so at the start accumulator = 0 

  if (n < 10) return n
  
  const sum = digital_root(String(n).split('').reduce(
    (accumulator, currentValue) => accumulator + +currentValue, 0)
  )

  return sum
}