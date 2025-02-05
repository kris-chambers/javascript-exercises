const repeatString = function(string, num) {
  if (num >= 0) {
    const array = [];
    for (let i = 0; i < num; i++) {
    array.push(string);
    }
    let answer = array.join('');
    return answer
  } else {
    return 'ERROR';
  }
  
};

// Do not edit below this line
module.exports = repeatString;
