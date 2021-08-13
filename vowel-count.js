function getCount(str) {
  // value will increase with each vowel found
  let vowelsCount = 0;
  // what will be cross referenced with str to see how many matches
  const vowels = 'aeiou'
  // for loop str so we have each individual letter
  for (let i = 0; i < str.length; i++) {
    // if the vowels index (a=0 e=1 i=2 etc...) matches a str[i] value then add one to vowlesCount
    if (vowels.indexOf(str[i]) > -1) {
      vowelsCount++
    } 
  }
  // return 
  return vowelsCount;
}

//! another method

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
  }