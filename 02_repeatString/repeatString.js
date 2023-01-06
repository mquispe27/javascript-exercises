const repeatString = (string, num) => {
    let final_string = "";
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        final_string = final_string + string;
    }
    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
