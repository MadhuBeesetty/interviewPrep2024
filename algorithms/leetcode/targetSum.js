// 494. Target Sum

// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-'
// before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate
// them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// [1,2,3,4,1] target = 6
// 11 , -5
// [2,3], [1,4]
// 10 + 10
// 20

// Example 2:

// Input: nums = [1], target = 1
// Output: 1

// array []
// target

// reference array [{positiveValue:"", negative:""}, "", "", "", "", ""];

// [1,1,1,2,2] = 4

// sum , target,
// sum of everything in the array = 5 but my target is 3 so + 3 and negatives should be 2
// [1]

// +1/-1, +1/-1

// you can do recursion solution;

const findTargetSumWays = (nums, target) => {
  let outputTracker = 0;

  const subFucntion = (i, sum) => {
      if (i === nums.length) {
          if (sum === target) {
              outputTracker++;
          }
          return;
      }
      subFucntion(i + 1, sum + nums[i]);
      subFucntion(i + 1, sum - nums[i]);
  };
  subFucntion(0,0);
  return outputTracker;
};

console.log(findTargetSumWays([1,2,3,4,1],6))
// memoization in recursion.
