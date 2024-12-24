// 78

// Given an integer array nums of unique elements, return all possible
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

const subsets = (nums) => {
  const Ans = [];
  const n = nums.length;

  const Helper = (op, startIdx) => {
      if (startIdx === n) {
          Ans.push(op.slice());
          return;
      }

      op.push(nums[startIdx]);
      Helper(op, startIdx + 1);

      op.pop();

      Helper(op, startIdx + 1);
  }

  Helper([], 0);
  return Ans;
};

console.log(subsets([1,2,3]))
