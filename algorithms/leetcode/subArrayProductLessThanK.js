// 713. Subarray Product Less Than K

// Given an array of integers nums and an integer k, return the number of contiguous
//  subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

const numSubarrayProductLessThanK = (nums, k) => {

  let output = [];
  for (var i = 0; i < nums.length; i++) {
      for (var j = i + 1; j <= nums.length; j++) {
          let subArray = nums.slice(i, j);
          let product = 1;
          subArray.forEach((e) => product = product * e);
          console.log(subArray,product);
          if (product < k) {
              output.push(subArray);
          }
      }
  };
  return output.length;
};

numSubarrayProductLessThanK([10,5,2,6], 100);
