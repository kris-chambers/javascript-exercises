const repeatString = function(string, num) {
  let newString = '';
  if (num < 0) {
    return "ERROR";
  } else {  
    for (let i = 0; i < num;) {
      newString += string;
      i++;
  }
}
  return newString;
} 

// Do not edit below this line
module.exports = repeatString;
