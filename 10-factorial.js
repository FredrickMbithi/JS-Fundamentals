#!/usr/bin/node

// Recursive factorial function
function factorial(n) {
  if (isNaN(n)) {
    return 1; // Factorial of NaN is 1
  }
  if (n <= 1) {
    return 1; // Base case: 0! = 1 and 1! = 1
  }
  return n * factorial(n - 1); // Recursive step
}

// Read the first argument and cast to integer
const arg = parseInt(process.argv[2]);

// Compute factorial
const result = factorial(arg);

// Print the result
console.log(result);
