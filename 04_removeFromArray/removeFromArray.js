const removeFromArray = function(array, element) {
    for (let i = 1; i < arguments.length; i++) {
        const index = array.indexOf(arguments[i]);
        if (index > -1) {
            array.splice(index, 1);
        }
        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
