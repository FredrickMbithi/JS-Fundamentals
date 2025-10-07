#!/usr/bin/node

// Get the number from the first argument
const times = parseInt(process.argv[2]);

// Check if it's a valid number
if (isNaN(times)) {
  console.log('Missing number of occurrences');
} else {
  // Print "C is fun" that many times
  for (let i = 0; i < times; i++) {
    console.log('C is fun');
  }
}