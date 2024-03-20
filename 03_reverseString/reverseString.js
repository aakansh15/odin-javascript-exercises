const reverseString = function(string) {
  arrStr = string.split('');
  arrStr.reverse();
  revStr = arrStr.join('');
  return revStr;
};

// Do not edit below this line
module.exports = reverseString;
