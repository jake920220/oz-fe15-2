function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function popAd() {
  console.log("Ad popped!");
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function sqrt(number) {
  if (number < 0) {
    throw new Error("Cannot compute square root of a negative number.");
  }
  return Math.sqrt(number);
}
