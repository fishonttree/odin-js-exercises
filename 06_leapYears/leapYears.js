const leapYears = function(year) {

    /* Divisible by 4, divisible by 100 if and only if divisible by 400 simultaneously */

    if (year % 100 === 0 && year % 400 !== 0) {
        return false ;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true ;
    } else if (year % 4 === 0) {
        return true ;
    } else {
        return false ;
    }
};

// Do not edit below this line
module.exports = leapYears;
