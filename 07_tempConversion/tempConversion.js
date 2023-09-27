const convertToCelsius = function(fDegree) {

  cDegree = (fDegree - 32) * 5/9 ;

  cDegree = Number.parseFloat(cDegree).toFixed(1) ;

  console.log(typeof cDegree) ;

  return Number(cDegree) ;

} ;

const convertToFahrenheit = function(cDegree) {

  fDegree = (cDegree * 9/5 + 32) ;

  fDegree = Number.parseFloat(fDegree).toFixed(1) ;

  return Number(fDegree) ;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
