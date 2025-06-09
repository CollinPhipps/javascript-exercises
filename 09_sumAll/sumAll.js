const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !typeof a === "Number" || 
        !typeof b === "Number" || !Number.isInteger(a) 
        || !Number.isInteger(b)) return "ERROR";

    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
