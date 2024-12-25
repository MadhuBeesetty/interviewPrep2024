// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// my solution.

const topKFrequent = (nums, k) => {
  let output = [];
  if (nums.length === 1 && k === 1) {
      output.push(nums[0]);
      return output;
  };
  nums.sort((a, b) => a - b);
  let num = nums[0]
  let count = 1;
  for (var i = 1; i < nums.length; i++) {
      if (num !== nums[i]) {
          console.log(nums, num, count, "hi");
          if (count >= k) {
              output.push(num);
          };
          num = nums[i];
          count = 1;
      } else {
          count = count + 1;
      }
  };
  return output;
};
console.log(topKFrequent([1], 1))

// solution by chat gpt:

const topKFrequent = (nums, k) => {
  const frequencyMap = new Map();

  for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const sortedByFrequency = Array.from(frequencyMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(entry => entry[0]);

  return sortedByFrequency;
};
