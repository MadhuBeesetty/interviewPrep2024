// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

const searchInsert = (nums, target) => {
  let idealPostion = 0;
  if (nums[0] === target) return 0;
  if (target < nums[0]) return 0;
  if (nums.length === 1) return 1;
  for (var i = 1; i < nums.length; i++) {
      if (i === nums.length - 1) {
          if (target > nums[nums.length - 1]) {
              idealPostion = nums.length;
              return idealPostion;
          }
      }
      if (nums[i] === target) {
          return i;
      } else if ((nums[i - 1] < target) && (nums[i] > target)) {
          idealPostion = i;
          return idealPostion;
      };
  };

};

// console.log(searchInsert([1, 3, 5, 6], 5));
 console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
