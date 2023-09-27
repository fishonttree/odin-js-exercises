const reverseString = function(inputString) {

    outputString = '' ;

    stringLength = inputString.length ;

    for (i = 1 ; i < stringLength + 1 ; i++) {
        outputString += inputString[stringLength - i] ;
    }

    return outputString ;

};

// Do not edit below this line
module.exports = reverseString;
