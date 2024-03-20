const removeFromArray = function(arr, ...args) {
  valuesRemoved = arr.filter((value) => {
    return !args.includes(value)
  })
  return valuesRemoved
};

// Do not edit below this line
module.exports = removeFromArray;
