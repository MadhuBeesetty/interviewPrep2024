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

