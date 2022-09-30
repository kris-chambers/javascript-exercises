const removeFromArray = function(array, ...remove) {
    const removeLength = remove.length
    const length = array.length;
    let newArray = [];
        for (let i = 0; i < length; i++) {
            if (remove.includes(array[i])) {
                continue;
            } else {
                newArray.push(array[i]);
            }
        } return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
