const sumAll = function(startInt, endInt) {

    sum = 0 ;

    if (startInt < 0 || endInt < 0 ) {
        return "ERROR" ;
    }

    if (typeof startInt !== "number" || typeof endInt != "number") {
        return "ERROR" ;

        /* Otherwise, use Number.isInteger() */
    }

    if (startInt > endInt) {
        temp = endInt ;
        endInt = startInt ;
        startInt = temp ;

        /* Otherwise, just do [min, max] = [max, min] */
    }

    for (i = startInt ; i <= endInt ; i++) {
        sum += i ; 
    }

    return sum ; 

};

// Do not edit below this line
module.exports = sumAll;
