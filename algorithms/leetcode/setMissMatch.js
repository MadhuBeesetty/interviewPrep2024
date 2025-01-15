// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
// which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

const findErrorNums = (nums) => {
  const n = nums.length;
  const duplicateArray = Array.from({ length: n }, (_, i) => i + 1);
  let duplicate, missing;

  for (let i = 0; i < n; i++) {
      if (nums.indexOf(duplicateArray[i]) === -1) {
          missing = duplicateArray[i];
      } else if (nums.lastIndexOf(duplicateArray[i]) !== nums.indexOf(duplicateArray[i])) {
          duplicate = duplicateArray[i];
      }
  }

  return [duplicate, missing];
};

console.log(findErrorNums([1,2,2,4]))
console.log(findErrorNums([2,2]))
