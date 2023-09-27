const repeatString = function(repeatString, num) {
    concatString = '' ;
    if (num < 0) {
        return 'ERROR' ;
    }
    for (i = 0 ; i < num ; i++) {
        concatString += repeatString ;
    }
    return concatString ; 
};

// Do not edit below this line
module.exports = repeatString;
