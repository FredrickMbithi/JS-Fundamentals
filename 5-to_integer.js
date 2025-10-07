#!/usr/bin/node

// Convert the first argument to an integer
const num = parseInt(process.argv[2]);

// Check if it's a real number
if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}