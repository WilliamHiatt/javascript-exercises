const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(incomingArr) {
  let sum = 0;
	incomingArr.forEach((x) => sum += x);
  return sum;
};

const multiply = function(incomingArr) {
  let sum = 1;
  incomingArr.forEach((x) => sum *= x)
  return sum;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
  let sum = 1;
  if (x == 0)
  {
    return 1;
  }
	for (x; x > 0; x--)
  {
    sum *= x;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
