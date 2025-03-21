// 53. Maximum Subarray

// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      let tempArr = [];

      for (let j = i; j < nums.length; j++) {
          sum += nums[j];
          tempArr.push(nums[j]);

          if (sum > maxSum) {
              maxSum = sum;
              ans = [...tempArr];
          }
      }
  }

  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));
