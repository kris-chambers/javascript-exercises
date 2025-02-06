const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let number in array) {
    sum = sum + array[number];
  }
  return sum;
};

const multiply = function(array) {
  let answer = 1;
  for (let number in array) {
    answer = answer * array[number];
  }
  return answer;
};


const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let answer = 1;
  for (let i = num; i > 0; i--) {
    answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
