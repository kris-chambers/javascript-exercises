const reverseString = function(string) {
let stringArray = string.split("");
let newArray = []
const num = stringArray.length
let newString = ''
for (let i = 0; i < num;) {
    let letter = stringArray.pop();
    newArray.push(letter);
    i++; 
    };
    newString = newArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
