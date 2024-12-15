// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
  let obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
    console.log(obj, i, nums[i], obj[nums[i]]);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

// updated solution using maps

const containsDuplicate = (nums) => {
  let containMap = new Map();
  for (var i = 0; i < nums.length; i++) {
      if (containMap.has(nums[i])) {
          return true;
      } else {
          containMap.set(nums[i], nums[i]);
      }
  }
  return false;
};
