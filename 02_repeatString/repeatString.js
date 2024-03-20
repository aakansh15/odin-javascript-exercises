const repeatString = function(string, num) {
  if (num === 0){
    return "";
  }
  else if (num < 0){
    return "ERROR";
  }
  while (num > 0){
    let newStr = string.repeat(num);
    num--;
    return newStr;
  }
};

// Do not edit below this line
module.exports = repeatString;
