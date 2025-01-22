// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

const mySqrt = (x) => {
  if (x === 1 || x === 0) return x;
  let lowerLimit = 1;
  let upperLimit = x;
  let midPoint;

  while (lowerLimit <= upperLimit) {
      const midPoint = Math.floor((upperLimit + lowerLimit) / 2);

      if (midPoint * midPoint === x) {
          return midPoint;
      }

      if (midPoint * midPoint < x) {
          lowerLimit = midPoint + 1;
          result = midPoint;
      } else {
          upperLimit = midPoint - 1;
      }
  }

  return result;
};

console.log(mySqrt(81));
console.log(mySqrt(84));
