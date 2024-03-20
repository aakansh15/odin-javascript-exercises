const sumAll = function(num1, num2) {
  let sumAllNumbers = 0;
  if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }

  if (num1 < 0 || num2 < 0){
    return "ERROR";
  }

  if (typeof num1 !== "number" || typeof num2 !== "number"){
    return "ERROR";
  }

  for (let i = num1; i <= num2; i++) {
    sumAllNumbers = sumAllNumbers + i;
  }
  return sumAllNumbers;
};

// Do not edit below this line
module.exports = sumAll;
