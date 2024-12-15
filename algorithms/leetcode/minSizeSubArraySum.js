// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const minSubArrayLen = (target, nums) => {
  let start = 0;
  let subarraySum = 0;
  let minValue = Infinity;
  for (let end = 0; end < nums.length; end++) {
      subarraySum += nums[end];
      while (subarraySum >= target) {
          minValue = Math.min(minValue, end - start + 1);
          subarraySum -= nums[start];
          start++;
      }
  }
  return minValue === Infinity ? 0 : minValue;
};

console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]))
