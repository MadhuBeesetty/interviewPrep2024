// 27. Remove Element

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeElement = (nums, val) => {
  let output = [];
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          output.push(nums[i])
      }
  }
  return output;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
