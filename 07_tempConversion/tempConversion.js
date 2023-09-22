const convertToCelsius = function(f) {
result =  (f-32)*5/9
return +result.toFixed(1)
};

const convertToFahrenheit = function(c) {
result = (c*9/5)+32 
return +result.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
