const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(a) {
  let sum  = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + parseInt(a[i]);
  }
  return sum;
}

const multiply = function(a) {
  let product = 1;
  for (let i = 0; i < a.length; i++) {
    product = product * parseInt(a[i]);
  }
  return product;
}

const power = (a,b) =>  {
  let power_val = 1;
  for (let i = 1; i <= b; i++) {
    power_val = power_val * a;
  }
  return power_val;
}

const factorial = function(a) {
  let factorial_value = 1;
	for (let i = 1; i <= a; i++) {
    factorial_value = factorial_value * i;
  }
  return factorial_value;
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
