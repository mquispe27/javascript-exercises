const reverseString = string => {
    let reversedString = "";
    let array = string.split("");
    for (let i = string.length-1; i >= 0; i--) {
        reversedString = reversedString + array[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
