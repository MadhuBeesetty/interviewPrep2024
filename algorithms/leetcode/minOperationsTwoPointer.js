// 2422. Merge Operations to Turn Array Into a Palindrome
// You are given an array nums consisting of positive integers.

// You can perform the following operation on the array any number of times:

// Choose any two adjacent elements and replace them with their sum.
// For example, if nums = [1,2,3,1], you can apply one operation to make it [1,5,1].
// Return the minimum number of operations needed to turn the array into a palindrome.

// Example 1:

// Input: nums = [4,3,2,1,2,3,1]
// Output: 2
// Explanation: We can turn the array into a palindrome in 2 operations as follows:
// - Apply the operation on the fourth and fifth element of the array, nums becomes equal to [4,3,2,3,3,1].
// - Apply the operation on the fifth and sixth element of the array, nums becomes equal to [4,3,2,3,4].
// The array [4,3,2,3,4] is a palindrome.
// It can be shown that 2 is the minimum number of operations needed.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 3
// Explanation: We do the operation 3 times in any position, we obtain the array [10] at the end which is a palindrome.

const minimumOperations = (nums) => {
  let changeTracker = 0;

  for (let i = 0, j = nums.length - 1; i < j; ) {
      if (nums[i] === nums[j]) {
          i++;
          j--;
      } else if (nums[i] < nums[j]) {
          nums[i + 1] += nums[i];
          i++;
          changeTracker++;
      } else {
          nums[j - 1] += nums[j];
          j--;
          changeTracker++;
      }
  }

  return changeTracker;
};


console.log(minimumOperations([4,3,2,1,2,3,1]));
