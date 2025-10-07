#!/usr/bin/node

// Get the size of the square
const size = parseInt(process.argv[2]);

// Check if it's a valid number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // Draw the square
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}