// 1999. Smallest Greater Multiple Made of Two Digits

// Given three integers, k, digit1, and digit2, you want to find the smallest integer that is:

// Larger than k,
// A multiple of k, and
// Comprised of only the digits digit1 and/or digit2.
// Return the smallest such integer. If no such integer exists or the integer exceeds the limit
//  of a signed 32-bit integer (231 - 1), return -1.

// Example 1:

// Input: k = 2, digit1 = 0, digit2 = 2
// Output: 20
// Explanation:
// 20 is the first integer larger than 2, a multiple of 2, and comprised of only the digits 0 and/or 2.
// Example 2:

// Input: k = 3, digit1 = 4, digit2 = 2
// Output: 24
// Explanation:
// 24 is the first integer larger than 3, a multiple of 3, and comprised of only the digits 4 and/or 2.
// Example 3:

// Input: k = 2, digit1 = 0, digit2 = 0
// Output: -1
// Explanation:
// No integer meets the requirements so return -1.

const findInteger = (k, digit1, digit2) => {
  let output = -1;
      let newDigit1 = digit1.toString() + digit2.toString()
      if (newDigit1 > k && newDigit1 % k === 0) {
          output = +newDigit1;
          console.log(output, "1");
      };
      let newDigit2 = digit2.toString() + digit1.toString()
      if (newDigit2 > k && newDigit2 % k === 0) {
          if (output > +newDigit2) {
              output = +newDigit2;
              console.log(output, "2");
          }
      };
  return output;
};

findInteger(3,4,2);
