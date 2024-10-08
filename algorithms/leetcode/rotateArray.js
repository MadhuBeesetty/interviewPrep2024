// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// solution 1

const rotateArray = (nums, k) => {
  for(var i = nums.length; i --;){
    // console.log(i, nums, k);
    if(k === 0) return nums;
    nums.unshift(nums.pop());
    k = k -1;
    if(i === 0) i = nums.length;
  }
}

// solution 2

// const rotate = (nums, k) => {
//   k = nums.length < k ? k - nums.length : k;
//   const items = nums.splice(nums.length - k, k);
//   nums.unshift(...items);
// };

console.log(rotateArray([1,2],3))
console.log(rotateArray([1,2,3,4,5,6,7],20))
