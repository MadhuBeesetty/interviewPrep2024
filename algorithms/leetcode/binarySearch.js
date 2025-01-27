// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while(left < right){
    let midPoint = left + Math.trunc((left + right)/2);
    if(nums[midPoint] === target){
      return midPoint;
    };
    if(target > midPoint){
      left = 1 + midPoint;
    }else{
      right = 1 - midPoint;
    };
  }
  return -1;
}

console.log(binarySearch[-1,0,3,5,9,12], 9);
