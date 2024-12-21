// Question 34

// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let output = [];

  const trackend = (nums, i) => {
      for (var j = i; j < nums.length; j++) {
          if (nums[j] != target) {
              output.push((j - 1));
              return output;
          }
      }
      if (nums[(nums.length - 1)] === target) {
          output.push(nums.length - 1);
          return output;
      }
      output.push(output[0]);
      return output;
  }

  for (var i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          output.push(i);
          return trackend(nums, i);
      }
  }
  return [-1, -1];
};

console.log(searchRange([2,2],2));
