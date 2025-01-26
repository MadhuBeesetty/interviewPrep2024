// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects
// of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

const sortColors = (nums) => {
  let counts = { 0: 0, 1: 0, 2: 0 };

  for (let i = 0; i < nums.length; i++) {
      counts[nums[i]]++;
  }

  let index = 0;
  for (let color = 0; color <= 2; color++) {
      for (let j = 0; j < counts[color]; j++) {
          nums[index++] = color;
      }
  }

  return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));
