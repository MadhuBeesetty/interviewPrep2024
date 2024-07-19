// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// sol 1

const productExceptSelf = (nums) => {
  let output = [];
  for (var i = 0; i < nums.length; i++) {
    let prod = 1;
    for (var j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod = prod * nums[j];
        console.log(prod)
      }
    }
    output.push(prod);
  }
  return output;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// sol 2

const productExceptSelf = (nums) => {
  let ans = [],
    i = 0,
    x,
    p = 1;

  while (i < nums.length) {
    p = 1;
    for (x = 0; x < nums.length; x++) {
      if (x != i) {
        p *= nums[x];
      } else {
        continue;
      }
    }
    if (p == nums[i] && nums[i] != 0) {
      return nums;
    }
    if (p == -0) {
      p = 0;
    }
    ans.push(p);
    i += 1;
  }
  return ans;
};
