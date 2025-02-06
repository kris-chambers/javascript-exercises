const fibonacci = function(place) {
  if (Number(place) === 0) {
    return 0;
  } else if (Number(place) < 0) {
    return "OOPS"
  } else {
    let fibonacciSequence = [1, 1]
    for (let i = 0; i < place; i++) {
    let num1 = parseInt(fibonacciSequence[fibonacciSequence.length - 1])
    let num2 = parseInt(fibonacciSequence[fibonacciSequence.length - 2])
    let sum = num1 + num2;
    fibonacciSequence.push(sum);
    }
  return fibonacciSequence[place - 1]; 
  }
   
};
// Do not edit below this line
module.exports = fibonacci;
