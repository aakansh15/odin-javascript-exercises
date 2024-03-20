function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(num) {
  if (typeof num !== 'number') {
    return "ERROR";
  }
  let fahFormula = (num - 32) * 5 / 9;
  return round(fahFormula, 1);
};

const convertToFahrenheit = function(num) {
  if (typeof num !== 'number') {
    return "ERROR";
  }
  let celFormula = (num * 9 / 5) + 32;
  return round(celFormula, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
