// 1291. Sequential Digits

// An integer has sequential digits if and only if each digit in the number is one more than the
// previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential
// digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

const isHigher = (num, output) => {
  let numArray = num.toString().split("");
  for (let i = 0; i < numArray.length - 1; i++) {
      if ((+numArray[i] + 1) !== +numArray[i + 1]) {
          return;
      }
  }
  return output.push(num);
}

const sequentialDigits = (a, b) => {
  let output = [];
  for (let i = a; i <= b; i++) {
      isHigher((i), output)
  }
  return output;
};
