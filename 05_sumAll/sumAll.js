const sumAll = function(a, b) {
    if (a < 0) {return "ERROR";}
    if (b < 0) {return "ERROR";}
    if (typeof(a) !== "number") {return "ERROR";}
    if (typeof(b) !== "number") {return "ERROR";}
    if (a < b) {
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
        return sum;
    }
    else {
        let sum = 0;
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
