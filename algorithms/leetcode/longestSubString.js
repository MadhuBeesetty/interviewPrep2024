const lengthOfLIS = (nums) => {
  const n = nums.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        console.log(dp);
      }
    }
  }

  return Math.max(...dp);
};

// Example 1:
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4

// Example 2:
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // Output: 4

// Example 3:
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // Output: 1
