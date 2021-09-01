/* 

A new virus (COVID-29) is spreading in the UK.

When someone catches the virus they are immediately contagious and able to spread it to others however, 
fortunately everyone recovers after a week and is no longer contagious thereafter (however there is a concern about other long term health effects). 

On Monday 1st March there are known to be N people infected in the previous week. 

The government issues a 'lockdown' order on that Mon March 1st and says that the order will stay in place until the first Monday on which the number of infections during the 
previous week is less than a target threshold, T. 

During the Lockdown the number of people to whom an infected person spreads the disease within a week is R, the rate of transmission.

Requirements of a valid test:
R will be a float greater than 0 and less than 1
N will be greater than T

Create a solution to calculate when the Lockdown will be released for some input values of N, T, R. 

The function should return a string in the format dd/mm/yyyy
If the requirements of a valid test aren't met, the function should return -1

*/

//! N = people infected in previous week
//! T = target threshold 
//! R = rate of infection per person

function lockdownLift(n,t,r) {
  if(r > 1 || n < t ){
    return -1
  }
  
  let weeks = 0
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let infected = n
  
  while(infected >= t){
   infected = infected * r;
    weeks++;
  }
  
  let day = 1+7*weeks
  let month = 2
  let year = 2021
  
  while(day > months[month]){
    day = day - months[month];
    month = month + 1;
    if(month > 11){
      month = 0
      year = year + 1
    }
  }
  
  return (day+'/'+ (month + 1) +'/'+ year)
}

// function lockdownLift(N, T, R) {
// 	const startDate = new Date('03/01/2021')
//   const days = 7
//   let weeks = 0
//   const endDate = new Date(start.setDate(start.getDate() + (days * weeks))).toGMTString()

//   if (N <= T) {
//     return console.log(end)
//   } else {
//     weeks++
//     N * R
//   }
// }


/* Tests */
console.log(lockdownLift(1000, 500, 0.5)) // "15/03/2021"
lockdownLift(1000, 500, 0.75) // "22/03/2021"
lockdownLift(5000, 500, 0.75) // "03/05/2021"