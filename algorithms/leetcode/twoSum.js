
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// two sum best output with o(n) time complexity
const twoSum = function(nums, target) {
  let map1 = new Map();
  let output = [];
  for(var i = 0; i < nums.length; i++){
      let diff = target - nums[i];
      if(map1.has(diff)){
          output.push(map1.get(diff));
          output.push(i);
          return output;
      }else{
          map1.set(nums[i], i);
      }
  }
};

const twoSum = (nums, target) => {
  let output = [];
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i);
        output.push(j);
      }
    }
  }
  return output;
};

// console.log(twoSum([2, 7, 11, 15], 9));

// recursion

const twoSum = (nums, target, i = 0, j = 1, output = []) => {
  console.log(i,j);
  if (nums[i] + nums[j] === target) {
    output.push(i);
    output.push(j);
    return output;
  }
  if (j < nums.length) return twoSum(nums, target, i, (j = j + 1));
  return twoSum(nums, target, (i = i + 1), (j = i + 1));
};

console.log(
  twoSum([9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000], 19999)
);
