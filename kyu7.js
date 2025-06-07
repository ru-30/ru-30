function sumTwoSmallestNumbers(numbers) {  
 numbers.sort((a, b) => a - b);

  // Return the sum of the first two elements (smallest numbers)
  return numbers[0] + numbers[1]; // Code here
}