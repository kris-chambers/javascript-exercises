const reverseString = function(string) {
  const stringToArray = string.split("");
  const reversedStringArray = [];
  const length = stringToArray.length
  for (let i = 0; i < length; i++) {
    reversedStringArray.push(stringToArray.pop());
  }
  return reversedStringArray.join("");
};
// Do not edit below this line
module.exports = reverseString;
