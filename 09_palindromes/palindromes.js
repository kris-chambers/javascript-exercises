const palindromes = function (string) {
  let keep = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "0"]
  let array1 = []
  let array2 = []
  let stringToLower = string.toLowerCase();
  let stringToArray = stringToLower.split("")
  for (let letter in stringToArray) {
    if (keep.includes(stringToArray[letter])) {
      array1.push(stringToArray[letter]);
      array2.unshift(stringToArray[letter]);
    }
  }
  return (array1.toString() === array2.toString())
};

// Do not edit below this line
module.exports = palindromes;
