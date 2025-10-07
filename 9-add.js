#!/usr/bin/node

// Create a function that adds two numbers
function add (a, b) {
  return a + b;
}

// Get the two numbers from arguments and convert them
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Add them and print the result
console.log(add(num1, num2));