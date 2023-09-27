const removeFromArray = function() {

    startArray = arguments[0] ;

    for (i = 1 ; i < arguments.length ; i++) {
        if (startArray.includes(arguments[i])) {
            startArray.splice(startArray.indexOf(arguments[i]), 1) ;
        }
    }

    console.log(startArray) ;

    return startArray ;

};

// Do not edit below this line
module.exports = removeFromArray;
