

const findInteger = (k, digit1, digit2) => {
  let output = -1;

  const generateNumbers = (current, depth) => {
      // Base case: Limit the length of numbers to prevent infinite recursion
      if (depth > 9) return;

      const num = parseInt(current); // Convert to a number

      // Check if the number meets the conditions
      if (num > k && num % k === 0) {
          if (output === -1 || num < output) {
              output = num; // Update the smallest valid number
          }
      }

      // Recursively generate more numbers by appending digit1 and digit2
      generateNumbers(current + digit1.toString(), depth + 1);
      generateNumbers(current + digit2.toString(), depth + 1);
  };

  // Start generating numbers, but exclude starting with '0' unless the number is exactly '0'
  if (digit1 !== 0) generateNumbers(digit1.toString(), 1);
  if (digit2 !== 0) generateNumbers(digit2.toString(), 1);

  return output === -1 ? -1 : output; // If no valid number is found, return -1
};
